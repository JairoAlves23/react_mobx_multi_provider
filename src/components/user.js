import React, { useState } from "react";

import { inject, observer } from "mobx-react";

function Usuario(props) {

  //console.log(props.store.authStore.setUser)  
  const { setUser, user } = props.store.authStore
  const { setNome, nome } = props.store.rootStore
  
  const onChange = evt => {
    //setName(evt.target.value)  
    setUser(evt.target.value) 
  }


  return (
      <div>
       <h1>Usuario</h1>   
      <input onChange={(e)=>onChange(e)}/>
      <h1>{`${user}`}</h1>
      <h1>{`${nome}`}</h1>
    </div>
  );
}

export default inject("store")(observer(Usuario));
