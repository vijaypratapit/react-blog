/** @format */

import React from "react";

export const Profile = ({ data, setData, err }) => {
  const { name, age } = data;
  const handleData = (e, item) => {
    setData((preVious) => ({
      ...preVious,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <label>Name:</label>
      <input
        type='text'
        name=''
        value={name}
        onChange={(e) => {
          handleData(e, "name");
        }}></input>
      {err.name && <span>{err.name}</span>}
      <label>Age:</label>
      <input type='text' value={age} />
    </div>
  );
};
