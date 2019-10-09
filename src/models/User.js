class UserModel {
  constructor(user) {
    Object.assign(this, user);
    console.log(JSON.stringify(this));
  }
}

export { UserModel };
