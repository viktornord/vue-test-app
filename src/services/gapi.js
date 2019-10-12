class GoogleApi {
  #gapi = window.gapi;

  renderSignInButton($elId) {
    let onSuccess = () => {};
    this.#gapi.signin2.render($elId, {
      onsuccess: (...args) => onSuccess(...args),
    });
    return {
      onSuccess: (cb) => onSuccess = cb,
    };
  }

}

export const googleAPI = new GoogleApi();
