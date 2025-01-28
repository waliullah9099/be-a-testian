import { expect, it } from "vitest";
import { returnStrLength } from "./strLength";

it("return current length for non-empty string", () => {
  const str = "Rezwan";
  expect(returnStrLength(str)).toBe(str.length);
});

it("return O for procvide empty string", () => {
  const str = "";
  expect(returnStrLength(str)).toBe(0);
});

it("thrrow error for non-string input", () => {
  expect(() => returnStrLength(null)).toThrow();
  expect(() => returnStrLength(undefined)).toThrow();
  expect(returnStrLength(123)).toBeUndefined();
});
