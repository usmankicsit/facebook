import { CRYPTO_SECRET_KEY } from 'src/constants';
const CryptoJS = require('crypto-js');

export const encrypt = (data: any) => {
  // Object to encrypt
  const objectToEncrypt = data;

  // Convert object to string
  const jsonString = JSON.stringify(objectToEncrypt);

  // Encrypt the string using AES
  const encrypted = CryptoJS.AES.encrypt(
    jsonString,
    CRYPTO_SECRET_KEY,
  ).toString();
  return encrypted;
};

export const decrypt = (encription: string) => {
  // Decrypt the encrypted string using AES
  const decryptedBytes = CryptoJS.AES.decrypt(encription, CRYPTO_SECRET_KEY);
  const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);

  // Parse the decrypted string into an object
  const decryptedObject = JSON.parse(decryptedString);
  return decryptedObject;
};
