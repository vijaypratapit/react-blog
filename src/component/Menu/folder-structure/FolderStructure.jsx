/** @format */

import React, { useState } from "react";
import json from "./dada.json";
import "./styles.css";
const List = ({ list }) => {
  {
    console.log(list, "@@list");
  }
  return (
    <div className='list-container'>
      {list.map((node) => (
        <div key={node.id}>
          <div>{node.name}</div>

          {node?.children && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};
const FolderStructure = () => {
  const [data] = useState(json);

  return (
    <div className='container'>
      <h1>File/Folder Structre</h1>
      <List list={data} />
    </div>
  );
};
export default FolderStructure;
