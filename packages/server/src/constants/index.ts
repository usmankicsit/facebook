require('dotenv').config();

const KB = 1024;
const MB = 1024 * KB;

// File Upload
export const MAX_PHOTO_SIZE = 5 * MB;
export const MAX_FILE_SIZE = 25 * MB;

export const FACEBOOK_API_PRIFIX = 'https://graph.facebook.com/v15.0';
export const OPENAI_API_KEY =
  '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';

export const PORT = process.env?.PORT;
export const BASE_URL = process.env?.BASE_URL;
export const CLIENT_URL = process.env?.CLIENT_URL;
export const SALT_ROUNDS = process.env?.SALT_ROUNDS;
export const APP_ID = process.env?.APP_ID;

export const DEFAULT_PASSPORT_STRATEGY = 'jwt';
export const JWT_SECRET_KEY = process.env?.JWT_SECRET_KEY;
export const JWT_TOKEN_EXPIRY_DEFAULT = 3600 * 8; //default 8 hours expiry value in seconds
export const JWT_TOKEN_EXPIRY_REMEMBER_ME = 3600 * 730; //default 1 month expiry value in seconds

export const TOKEN_EXPIRY_DEFAULT = 8; //default 8 hours expiry
export const TOKEN_EXPIRY_REMEMBER_ME = 1; //default 1 month expiry

export const UNIQUE_KEY_VIOLATION = '23505'; // Postgres error code for unique key violation

export const FORGOT_PASSWORD_TOKEN_EXPIRY_HOURS = 2; // Forgot password token expiry 2 hours

// Pagination
export const pagination = {
  ALL: 'all',
  DEFAULT_LIMIT: 20,
};

// Roles
export const DEFAULT_ROLES = {
  SUPER_ADMIN: 'SuperAdmin',
  COMPANY_ADMIN: 'Company Admin',
  SALE_MANAGER: 'Sale Manager',
  BUSINESS_MANAGER: 'Business Manager',
};

// Social Media Types
export const SOCIAL_MEDIA_TYPES = {
  FACEBOOK: 'Facebook',
  INSTAGRAM: 'Instagram',
  TWITTER: 'Twitter',
  LINKEDIN: 'LinkedIn',
  PINTEREST: 'Pinterest',
  GOOGLEPLUS: 'Google+',
};

// Post Types
export const POST_TYPES = {
  NOW: 'Now',
  SCHEDULED: 'Scheduled',
};

export const DATE_FORMAT = 'DD-MMM-YYYY';
export const DATE_MONTH_FORMAT = 'MMM-YYYY';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
export const INPUT_DATE_TIME_FORMAT = 'ddd MMM D YYYY HH:mm:ss Z';

export const ALL = 'all';
export const ANY = 'any';

export const S3 = {
  ACCESS_KEY_ID: 'AKIAQYRTAEATIJ4BI73I',
  SECRET_ACCESS_KEY: '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',
  REGION: 'eu-central-1',
  BUCKET_NAME: 'roadangel',
};
export const S3_URL = 'https://roadangel.s3.eu-central-1.amazonaws.com';

export const UPLOAD_TYPES = {
  PICTURE: 'Picture',
  VIDEO: 'Video',
};

export const DATABASE_META = {
  username: process.env?.DB_USERNAME,
  password: process.env?.DB_PASSWORD,
  database: process.env?.DB_DATABASE,
  host: process.env?.DB_HOST,
  port: process.env?.DB_PORT,
  client: process.env?.DB_CLIENT,
};



export const BREVO_API_KEY =
  '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';
// export const BREVO_EMAIL_TEMPLATES = {
//   RESET_PASSWORD: 1,
//   POST_NOTIFICATION: 3,
//   NEW_USER: 4,
// };

export const CAMAS = {
  URL:
    'https://camasys.roadangel.sk/api/integration/getCurrentCarGroupsAvailability',
  URL1:'https://camasys.roadangel.sk/api/integration/getCarGroupsPrices',
  URL2:'https://camasys.roadangel.sk/api/integration/getCarGroupsBranchAvailability',
  URL3:'https://camasys.roadangel.sk/api/integration/reserveCarGroup',
  URL4:'https://camasys.roadangel.sk/api/integration/cancelReservation',
  URL5:'https://camasys.roadangel.sk/api/contracts', 
  URL6:'https://camasys.roadangel.sk/api/contracts/prepareCheckOutDocuments',
  URL7:'https://camasys.roadangel.sk/document',
  URL8:'https://camasys.roadangel.sk/api/contracts/prepareCheckInDocuments',
  URL9:'https://camasys.roadangel.sk/api/contracts/uploadSignedDocument',
  URL10:'https://camasys.roadangel.sk/api/contracts/deleteDocument',
  URL11:'https://camasys.roadangel.sk/api/contracts/issueInvoice',
  URL12:'https://acadsys.roadangel.sk/api/integration/externalInvoice/create',
  TOKEN1:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcGlAcm9hZGFuZ2VsLnNrIiwidXNlcklkIjoiNDkxMjgwMzMtZWRhNS0xMWVlLWE5YjgtOTYwMDAzMWJhZGJlIiwiY29tcGFueU5hbWUiOiJSb2FkYW5nZWwiLCJjb21wYW55SWQiOiI0OTE0ZmMyZS1lMTk2LTExZWUtODYwYS05NjAwMDMxYmFkYmUiLCJ2YXQiOjAsImZpcnN0TmFtZSI6IkFQSSIsImxhc3ROYW1lIjoiUk9BREFOR0VMIiwib3JnYW5pemF0aW9uYWxVbml0cyI6WyI0OTE1MjMzZi1lMTk2LTExZWUtODYwYS05NjAwMDMxYmFkYmUiXSwicm9sZSI6IlJPTEVfQVBJX1VTRVIifQ.i7hsftcYW0lsWJVD_1oL30Y2ogYxB5TOIT4nWF2rwVHs11whbZxQaRJno4VlmW0Gaf3LCzFk167GgkBa1zs6Vw',
  // 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcGlwYXlsZXNzQGN1YmFsYWIuZXUiLCJ1c2VySWQiOiJkMTBiMzJkZS1iMmE1LTExZTgtOWQ4Ni1mMjNjOTFkNTJmOGYiLCJjb21wYW55TmFtZSI6IkFWSVMiLCJjb21wYW55SWQiOiJlNWNhNzg0Mi0xMjk2LTQ4OTEtYjE0My04NDU1MjI0NTUzNGUiLCJ2YXQiOjAsImZpcnN0TmFtZSI6Ik9OTElORSIsImxhc3ROYW1lIjoiUEFZTEVTU19XRUIiLCJvcmdhbml6YXRpb25hbFVuaXRzIjpbImI2MzlmOWJkLTZkNjQtMTFlOC05YzM1LWYyM2M5MWQ1MmY4ZiIsIjczMDcyYjE4LWY5OWUtMTFlYS04YzliLWYyM2M5MWQ1MmY4ZiJdLCJyb2xlIjoiUk9MRV9BUElfVVNFUiJ9.pNc9htb9OHuzfcCr7YqP5gP--hu4o9w0rFE-9tHUJcbPakbyI6k2AZlrt7gOJBDBQmuup8Ds3A_vy5AcZeZDtA',
  TOKEN2:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcGlAcm9hZGFuZ2VsLnNrIiwiaWQiOiI2MWMzYjc1OC0yZjQ1LTExZWYtYTdhZC05NjAwMDMxYmFkYmUiLCJjb21wYW55SWQiOiI2MTI4MzAwMy0yZjQ0LTExZWYtYTdhZC05NjAwMDMxYmFkYmUiLCJmaXJzdE5hbWUiOiJBUEkiLCJsYXN0TmFtZSI6IlJEIiwicm9sZSI6IlJPTEVfQVBJIiwidmVyc2lvbiI6IjEuMy4xLVNOQVBTSE9UIiwiY2FuVXBsb2FkRG9jdW1lbnRzIjp0cnVlLCJsb2dpbkRldGFpbCI6IjYxYzM5MDQ3LTJmNDUtMTFlZi1hN2FkLTk2MDAwMzFiYWRiZSJ9.CxuRLtkdKnUKswx2FVhJncRSDJw055Z0AIuv3gzCytf4cNEqJanVtqj-rWaa5N_f9lE-iNk7tmMHBlR3PAeWrA',
  TOKEN:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcGlAY3ViYWxhYi5ldSIsInVzZXJJZCI6IjEwYWQxNzc2LTYzMDctMTFlOC05NTRlLWYyM2M5MWQ1MmY4ZiIsImNvbXBhbnlOYW1lIjoiQVZJUyIsImNvbXBhbnlJZCI6ImU1Y2E3ODQyLTEyOTYtNDg5MS1iMTQzLTg0NTUyMjQ1NTM0ZSIsInZhdCI6MCwiZmlyc3ROYW1lIjoiT05MSU5FIiwibGFzdE5hbWUiOiJBVklTX1dFQiIsIm9yZ2FuaXphdGlvbmFsVW5pdHMiOlsiYzFiNzQ0ZTUtMDFlMi0xMWU4LTg1MzQtZjIzYzkxZDUyZjhmIiwiODIzODlmNjUtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiNjM5YTE4NjYtOGZjMi0xMWU3LTkwZWEtZjIzYzkxZDUyZjhmIiwiOTVjNGE1NGUtOTMxOC0xMWU3LTljYzctZjIzYzkxZDUyZjhmIiwiNjRjZTQwYjgtOGZjNC0xMWU3LTkwZWEtZjIzYzkxZDUyZjhmIiwiY2FhMTc1MWQtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiM2NlYjNhNzktNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiODI1ZTljYjktOGZjNC0xMWU3LTkwZWEtZjIzYzkxZDUyZjhmIiwiYzdiNTE1NTYtMDFiMi0xMWU4LTg1MzQtZjIzYzkxZDUyZjhmIiwiNTFkNWVkZDAtN2M2Yi0xMWU5LTgwMjMtZjIzYzkxZDUyZjhmIiwiMjFkYzMyMjUtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiZjI0NDE0OGUtN2VhZC0xMWU4LWJjYjEtZjIzYzkxZDUyZjhmIiwiOGE1MDgxMjItMDFkYS0xMWU4LTg1MzQtZjIzYzkxZDUyZjhmIiwiNTQ3MDBhOWYtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiZDlhYzUxNmUtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiOWZmMDU5OGEtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiOTVmNzZjMDMtN2Q4MC0xMWVlLWJiYzktOTYwMDAwZjZmM2JkIiwiMGVhYmVmMTMtNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiZjA5MTcwYjctMDFlMi0xMWU4LTg1MzQtZjIzYzkxZDUyZjhmIiwiYjUwZjliNWItNGY4YS0xMWU4LTliYzYtZjIzYzkxZDUyZjhmIiwiN2M2ZTlhZjQtMDFlMi0xMWU4LTg1MzQtZjIzYzkxZDUyZjhmIiwiYTdmMTllNjItYzkyNy00N2FlLWFjNjItZmUzNDQ5ZmMyOTVmIl0sInJvbGUiOiJST0xFX0FQSV9VU0VSIn0.u6IHiQWzNtnuxFKiBYoKbeVpHUjlBHaEwiP6rpojTWcq14vsvS0YJ33eU6C7tmt3VUNvDB4QZzD5J-rO_GEdIw',
};

export const BREVO_EMAIL_TEMPLATES = {
  INVOICE_FOR_REPAIR_VEHICLE: 1,
  SENDING_COMPLETE_DOCUMENT: 5,
  DOCUMENTS_FOR_FILLING_INTO_FILES: 6,
  INVOICE_FOR_REPLACEMENT_VEHICLE: 7,
  CUSTOM_TEMPLATE: 3,
  RESET_PASSWORD: 2,
  POST_NOTIFICATION: 7,
  NEW_USER: 5,
};

export const BREVO_FOLDER_ID = 1;

export const BREVO_LISTS = {
  ALL_CONTACTS: 2,
};

export const CRYPTO_SECRET_KEY = '8c7827fecf6a303176064ddfce207c5a';
