/** @format */

// /** @format */

import React from "react";
import Pagination from "./component/Menu/pagination";
import { BrowserRouter, Route, Routes } from "react-router";
import Accordian from "./component/Menu/accordian";
import Body from "./component/Body";
import Autocomplete from "./component/Menu/autocomplete";
import FolderStructure from "./component/Menu/folder-structure";
import "./component/i18n";
import { UserList } from "./component/Menu/user-list/UserList";
import Debounce from "./component/Menu/debouncing/Debounce";
import Throttling from "./component/Menu/autocomplete/throttling";
import Practice from "./component/Menu/practice";
//import { useTranslation } from "react-i18next";
const App = () => {
  // const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes basePath={"/"}>
        <Route path='/' element={<Body />}>
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/accordian' element={<Accordian />} />
          <Route path='/autocpmplete' element={<Autocomplete />} />
          <Route path='/folder-structre' element={<FolderStructure />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/debouncing' element={<Debounce />} />
          <Route path='/throttling' element={<Throttling />} />
          <Route path='/practice' element={<Practice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
