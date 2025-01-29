export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  updateName(newName) {
    this.name = newName;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  clearEmail() {
    this.email = "";
  }
}
