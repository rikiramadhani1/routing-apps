/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useParams, useHistory } from "react-router-dom";
export default () => {
  const { id } = useParams();
  const history = useHistory();
  return <div>
    <h2> Post ke-{id} </h2>
    <p>Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in
      the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.</p>
    <button onClick={() => history.push("/")}>
      Back
    </button>
  </div>
}