import { expect, it } from "vitest";
import { User } from "./hooks";

const testEmail = "test@email.com";
const user = new User(testEmail);

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should update the email property", () => {
  const newEmail = "new@email.com";

  user.updateEmail(newEmail);

  expect(user.email).toBe(newEmail);
});

it("should still have an email property after cleaning the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
