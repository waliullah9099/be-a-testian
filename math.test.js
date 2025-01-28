import { expect, it } from "vitest";
import { add } from "./math";

it("should return the correct sum if provided an array of numbers", () => {
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});
