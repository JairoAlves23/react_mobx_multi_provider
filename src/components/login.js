import React from "react";

import { inject, observer } from "mobx-react";

function Login(props) {

  const { setUser, user } = props.store.authStore
  const { setNome, nome } = props.store.rootStore
  
  const onChange = evt => {
    setNome(evt.target.value) 
  }

  return (
      <div>
       <h1>Login</h1>   
      <input onChange={(e)=>onChange(e)}/>
      <h1>{`${nome}`}</h1>
    </div>
  );
}

export default inject("store")(observer(Login));