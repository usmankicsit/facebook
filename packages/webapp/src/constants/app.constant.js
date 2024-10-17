export const APP_NAME = "SIC";
export const PERSIST_STORE_NAME = "admin";
export const REDIRECT_URL_KEY = "redirectUrl";

export const NO_IMAGE_URL =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

export const DEFAULT_ROLES = {
  SUPER_ADMIN: 1,
  COMPANY_ADMIN: 2,
  USER: 3,
};

//------- SOCIAL MEDIA URLS
export const FACEBOOK_API_PREFIX = "https://www.facebook.com";
export const TARGET_LINK_PARAM = "https://l.facebook.com/l.php?u";

// Social Media Types
export const SOCIAL_MEDIA_TYPES = {
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
  // TWITTER: "Twitter",
  TIKTOK: "TikTok",
  LINKEDIN: "Linked In",
  // PINTEREST: "Pinterest",
  // GOOGLEPLUS: "Google+",
};

export const ICONS = {
  [SOCIAL_MEDIA_TYPES.FACEBOOK]: "/img/fb-circle.svg",
};

export const SOCIAL_MEDIA_CONTENT_TYPES = {
  video_direct_response_autoplay: "video",
  video_autoplay: "video",
  VIDEO: "video",
  video_inline: "video",
  videos: "video",
  photo: "photo",
  IMAGE: "photo",
  album: "photo",
  images: "photo",
  map: "photo",
  share: "share",
};

export const SOCIALMEDIA_META_DATA = {
  FACEBOOK: {
    APP_ID: import.meta.env.VITE_FACEBOOK_APP_ID,
    APP_SECRET: import.meta.env.VITE_FACEBOOK_APP_SECRET,
  },
};
