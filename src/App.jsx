import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import HousePage from "./Pages/HousePage/HousePage";
import StaffPage from "./Pages/StaffPage/StaffPage";
import StudentPage from "./Pages/StudentPage/StudentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/HousePage" exact component={HousePage} />
        <Route path="/StaffPage" component={StaffPage} />
        <Route path="/StudentPage" exact component={StudentPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
