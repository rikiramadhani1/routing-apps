/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useHistory } from "react-router-dom";

export default ({setLogin}) => {

  const history = useHistory()
  return <div>
    <h2>Halaman Login</h2>
    <p>
      <button onClick={() => {
        setLogin(true)
        history.push('/')
      }}> Login </button>
    </p>
  </div>

}