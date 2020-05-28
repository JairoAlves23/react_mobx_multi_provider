import { decorate, observable, action } from "mobx";

class RootStore {
  nome = "";

  setNome = (value) => { 
    this.nome = value
  }
}

decorate(RootStore, {
  nome: observable,
  setNome: action,
});

export default new RootStore();
