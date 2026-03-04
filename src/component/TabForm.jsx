/** @format */

import React, { useState } from "react";
import { Profile } from "./Profile";
import { Setting } from "./Setting";
import { Interest } from "./Interest";
import "./Tab.css";

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [err, setError] = useState({
    name: "",
  });
  const [data, setData] = useState({
    name: "vijay",
    age: 33,
    interest: ["coding", "music"],
    them: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};
        if (data.name == "") {
          error.name = "Please file the data";
        }
        setError(error);
        return data.name == "" ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
    },
    {
      name: "Interest",
      component: Interest,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handlePreClick = () => {
    setActiveTab((pre) => pre - 1);
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((pre) => pre + 1);
    }
  };

  return (
    <>
      <div className='container'>
        {tabs.map((t, index) => (
          <div
            className='heading'
            key={index}
            onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className='tab-container'>
        <ActiveTabComponent data={data} setData={setData} err={err} />
      </div>
      <div className=''>
        {activeTab > 0 && <button onClick={handlePreClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && <button>Sumit</button>}
      </div>
    </>
  );
};
