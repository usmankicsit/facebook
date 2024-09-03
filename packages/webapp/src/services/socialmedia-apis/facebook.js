import axios from "axios";
const PRIFIX = "https://graph.facebook.com/v20.0";

export async function getUserInfo(userId, options = {}) {
  options.fields = "id,name,picture,email";
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/${userId}?${params}`);
  return response.data;
}

export async function createAccount({ userId, access_token }, data = {}) {
  const params = new URLSearchParams({ access_token });
  const response = await axios.post(
    `${PRIFIX}/${userId}/accounts?${params}`,
    data
  );
  return response.data;
}

export async function getPageAgencies(pageId, options = {}) {
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/${pageId}/agencies?${params}`);
  return response.data;
}

export async function getPageDetails(pageId, options = {}) {
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/${pageId}?${params}`);
  return response.data;
}

export async function getLongLivedToken(options = {}) {
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/oauth/access_token?${params}`);
  return response.data;
}

export async function getFacebookPosts(pageId, options = {}) {
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/${pageId}/feed?${params}`);
  return response.data;
}

export async function getFacebookPostComments(page_post_id, options = {}) {
  const params = new URLSearchParams(options);
  const response = await axios.get(
    `${PRIFIX}/${page_post_id}/comments?${params}`
  );
  return response.data;
}

export async function getPostEngagements(page_post_id, options = {}) {
  options.fields = "comments,reactions,likes,shares";
  const params = new URLSearchParams(options);
  const response = await axios.get(`${PRIFIX}/${page_post_id}?${params}`);
  return response.data;
}

export async function getPostEngagementCount(page_post_id, options = {}) {
  options.fields = "comment_count,like_count";
  const params = new URLSearchParams(options);
  const response = await axios.get(
    `${PRIFIX}/${page_post_id}/comments?${params}`
  );
  return response.data;
}
