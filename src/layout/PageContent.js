import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPages";
import SuccessPage from "../pages/SuccessPage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/order-page" exact>
          <OrderPage />
        </Route>

        <Route path="/success-page" exact>
          <SuccessPage />
        </Route>

        <Route path="*">
          <h1>404 Not Found Page</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
