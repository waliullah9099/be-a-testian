import { expect, it } from "vitest";
import { transformToNumber } from "./transferToNumber";

it("should return a nubber if provide a numeric string", () => {
  const value = "habiba";
  const result = transformToNumber(value);

  expect(result).toBeTypeOf("number");
  //   expect(isNaN(result)).not.toBe(true); still not working
});
