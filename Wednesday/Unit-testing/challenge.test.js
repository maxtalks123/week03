import { expect, test } from "vitest";

import { sum, subtract, multiply, divide, isPalindrome } from "./challenge.js";

test("sum", () => {
  const expected = 2;
  const actual = sum(1, 1);
  expect(actual).toBe(expected);
});
test("subtract", () => {
  const expected = 5;
  const actual = subtract(10, 5);
  expect(actual).toBe(expected);
});

test("multiply", () => {
  const expected = 81;
  const actual = multiply(9, 9);
  expect(actual).toBe(expected);
});

test("divide", () => {
  const expected = 9;
  const actual = divide(81, 9);
  expect(actual).toBe(expected);
});

test("isPalindrome", () => {
  const expected = "kayak";
  const actual = isPalindrome("kayak");
  expect(actual).toBe(expected);
});
