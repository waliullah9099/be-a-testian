import CrytoJS from "crypto-js";

export function encryptoMessage(msg, key, callback) {
  const encryptedMessage = CrytoJS.AES.encrypt(msg, key).toString();
  callback(encryptedMessage);
}

export function encryptoMessagePromise(msg, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CrytoJS.AES.encrypt(msg, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Could not encrypt message"));
      }
    }, 2000);
  });
}
