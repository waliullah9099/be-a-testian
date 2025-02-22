import { expect, it } from "vitest";
import { add } from "./math";

it("should return the correct sum if provided an array of numbers", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5];
  const expectedResult = numbers.reduce((acc, curr) => {
    return acc + curr;
  });

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBe(expectedResult);
});

it("it shoild provided NAN if at least one invalid number provided", () => {
  // Arrange
  const numbers = [1, 2, "invalid", 4, 5];

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBeNaN();
});

it("it shoild provided correct sum if an array numeric string is provided", () => {
  // Arrange
  const numbers = [1, 2, "3", 4, "5"];
  const expectedResult = numbers.reduce((acc, curr) => {
    return +acc + +curr;
  });

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBe(expectedResult);
});

it("it shoild through an error if no arguments passed", () => {
  // try {
  //   const error = add();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }

  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("it shoild through an error if multiple argument is passed", () => {
  const resultFn = () => {
    add(1, 2, 3, 4);
  };
  expect(resultFn).toThrow(/is not iterable/i);
});
