import ApiService from "./ApiService";
const PRIFIX = "socialmedia-post";

export async function saveSocialMediaMetaData(data) {
  return ApiService.fetchData({
    url: `${PRIFIX}/meta-data/save`,
    method: "post",
    data,
  });
}

export async function searchFacebookPage(options = {}) {
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/facebook/pages-search?${params}`,
    method: "get",
  });
}

export async function getFacebookAccounts(userId, options = {}) {
  options.fields =
    "access_token,id,name,category,place_type,picture,about,followers_count,link,website,business";
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/facebook/accounts/${userId}?${params}`,
    method: "get",
  });
}

export async function getInstagramAccounts(userId, options = {}) {
  options.fields =
    "access_token,id,name,instagram_business_account,category,place_type,picture,about,followers_count,link,website";
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/instagram/accounts/${userId}?${params}`,
    method: "get",
  });
}

export async function getSocialmediaPostComments(options = {}) {
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/get-post-comments?${params}`,
    method: "get",
  });
}

export async function getSocialmediaCommentPosts(options = {}) {
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/get-comment-posts?${params}`,
    method: "get",
  });
}

export async function getPageKnowledgebase(options = {}) {
  const params = new URLSearchParams(options);
  return ApiService.fetchData({
    url: `${PRIFIX}/get-page-knowledge?${params}`,
    method: "get",
  });
}

export async function getSocialMediaPost(id) {
  return ApiService.fetchData({
    url: `${PRIFIX}/${id}`,
    method: "get",
  });
}
