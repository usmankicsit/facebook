export const APP_NAME = 'SIC'
export const PERSIST_STORE_NAME = 'admin'
export const REDIRECT_URL_KEY = 'redirectUrl'

export const DEFAULT_ROLES = {
  SUPER_ADMIN: 1,
  COMPANY_ADMIN: 2,
  USER: 3,
}
// Social Media Types
export const SOCIAL_MEDIA_TYPES = {
  FACEBOOK: 1,
  INSTAGRAM: 2,
  TWITTER: 3,
  LINKEDIN: 4,
  PINTEREST: 5,
  GOOGLEPLUS: 6,
};
export const SOCIALMEDIA_META_DATA = {
  FACEBOOK: {
    APP_ID: import.meta.env.VITE_FACEBOOK_APP_ID,
    APP_SECRET: import.meta.env.VITE_FACEBOOK_APP_SECRET,
  }
};