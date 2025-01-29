import { describe, expect, it } from "vitest";
import { validateArrayNotEmpty, validationEmail } from "./validation";

describe("validationEmail()", () => {
  it("Should a current email address", () => {
    const email = "test@email.com";
    const resultFn = () => validationEmail(email);
    expect(resultFn).not.toThrow();
  });

  it("Should thrown an error if invalid email passed", () => {
    const email = "tes";
    const resultFn = () => validationEmail(email);
    expect(resultFn).toThrow();
  });

  it("Should thrown an error if empthy email passed", () => {
    const email = "";
    const resultFn = () => validationEmail(email);
    expect(resultFn).toThrow();
  });

  it("Should throw an error if null email is passed", () => {
    expect(() => validationEmail(null)).toThrow("Invalid email");
  });

  it("Should throw an error if undefined email is passed", () => {
    expect(() => validationEmail(undefined)).toThrow("Invalid email");
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should throw an error for an empty array", () => {
    const arr = [];
    const resultFn = () => validateArrayNotEmpty(arr);
    expect(resultFn).toThrow("Array cannot be empty");
  });

  it("should throw an error for a non-array input", () => {
    const obj = {};
    const resultFn = () => validateArrayNotEmpty(obj);
    expect(resultFn).toThrow("Array cannot be empty");
  });

  it("should not throw an error for a non-empty array", () => {
    const arr = [1, 2, 3];
    const resultFn = () => validateArrayNotEmpty(arr);
    expect(resultFn).not.toThrow();
  });
});

// it("should valid a non empty array", () => {
//   const arr = [1, 2, 3];
//   const resultFn = () => validateArrayNotEmpty(arr);
//   expect(resultFn).not.toThrow();
// });

// it("throws an error for a null input", () => {
//   expect(() => validateArrayNotEmpty(null)).toThrow("Array cannot be empty");
// });
