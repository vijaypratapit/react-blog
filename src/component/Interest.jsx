/** @format */

import React from "react";

export const Interest = ({ data, setData }) => {
  const { interest } = data;
  const handleInterest = (val) => {
    if (interest.includes(val)) {
      setData({
        ...data,
        interest: interest.filter((i) => i != val),
      });
    } else {
      setData({
        ...data,
        interest: [...interest, val],
      });
    }
  };
  return (
    <div>
      <div>
        <label>
          <input
            type='checkbox'
            name='codding'
            checked={interest.includes("coding")}
            onChange={() => {
              handleInterest("coding");
            }}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='music'
            checked={interest.includes("music")}
            onChange={() => {
              handleInterest("music");
            }}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='music'
            checked={interest.includes("javascrip")}
            onChange={() => {
              handleInterest("javascrip");
            }}
          />
          javascrip
        </label>
      </div>
    </div>
  );
};
