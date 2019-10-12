class UserModel {
  constructor(user) {
    Object.assign(this, user);
  }
  getFullAddress() {
    /** @member {{city: string, street: string, zipcode: string, suite: string}} address */
    const { address } = this;
    return `${address.city}, ${address.street}, ${address.suite} ${address.zipcode}`
  }
}

export { UserModel };
