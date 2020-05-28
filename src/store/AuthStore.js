import { decorate, observable, action } from "mobx";

class AuthStore {
  user = "Valor Inicial Usuario";

  setUser = (value) => { 
    this.user = value
  }
}

decorate(AuthStore, {
  user: observable,
  setUser: action,
});

export default new AuthStore();
