export const validationEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
};

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
}
