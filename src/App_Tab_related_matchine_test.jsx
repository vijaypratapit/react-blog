/** @format */

import React from "react";
import { TabForm } from "./component/TabForm";

const App = () => {
  const key = import.meta.env.VITE_APIKEY;
  return (
    <>
      key:{key}
      <TabForm />
    </>
  );
};

export default App;
/** @format */
