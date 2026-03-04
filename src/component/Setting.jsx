/** @format */
import React from "react";

export const Setting = ({ data, setData }) => {
  const { them } = data;
  const handleChangeThem = (e) => {
    setData((previousData) => ({
      ...previousData,
      them: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type='radio'
            name='dark'
            value='dark'
            checked={them === "dark"}
            onChange={handleChangeThem}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type='radio'
            name='light'
            value='light'
            checked={them === "light"}
            onChange={handleChangeThem}
          />
          Light
        </label>
      </div>
    </div>
  );
};
