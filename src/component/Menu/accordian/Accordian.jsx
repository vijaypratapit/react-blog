/** @format */

import { useState } from "react";

const Accordian = () => {
  const [activeId, setActiveId] = useState(null);
  const Items = [
    { id: 1, title: "section1", dec: "des is open" },
    { id: 2, title: "section2", dec: "open sec2" },
    { id: 3, title: "sectio3", dec: "open section3" },
  ];
  const AccordianItem = ({ item }) => {
    return (
      <div
        style={{ border: "1px solid black", marginTop: "8px", width: "300px" }}>
        <div
          style={{ backgroundColor: "gray" }}
          onClick={() => {
            setActiveId(activeId === item.id ? null : item.id);
          }}>
          {item.title}

          <div
            style={{
              backgroundColor: "#fff",
              display: activeId === item.id ? "block" : "none",
            }}>
            {item.dec}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Accrodian List1</h1>
      {Items.map((item) => {
        return <AccordianItem key={item.id} item={item} />;
      })}
    </>
  );
};
export default Accordian;
