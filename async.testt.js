import CrytoJS from "crypto-js";
import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import { encryptoMessage, encryptoMessagePromise } from "./async";

beforeAll(() => {
  console.log("before all");
});

beforeEach(() => {
  console.log("before each");
});

afterEach(() => {
  console.log("after each");
});

afterAll(() => {
  console.log("after all");
});

it("should encrypted a messase", async () => {
  const msg = "Hello World!";
  const srcKey = "1234567890123456";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptoMessage(msg, srcKey, (msg) => {
      resolve(msg);
    });
  });
  expect(encryptedData).toBeDefined();
});

it("should also just passed", async () => {
  const msg = "Hello World!";
  const srcKey = "1234567890123456";

  const encryptedData = await encryptoMessagePromise(msg, srcKey);
  expect(encryptedData).toBeDefined();
});

it("should encrypted the messase correctly", async () => {
  const msg = "Hello World!";
  const srcKey = "1234567890123456";

  const encryptedData = await encryptoMessagePromise(msg, srcKey);
  expect(encryptedData).toBeDefined();

  const decryptedData = CrytoJS.AES.decrypt(encryptedData, srcKey).toString(
    CrytoJS.enc.Utf8
  );

  expect(decryptedData).toBe(msg);
});
