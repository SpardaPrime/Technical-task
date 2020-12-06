import React from "react";
import { Provider } from "react-redux";
import ErrorBoundry from "../errorBoundry/";
import Employees from "../Employees/";
import BirthdayBlock from "../birthdayBlock";
import store from "../../store";

const App = () => {
  return (
    <ErrorBoundry>
      <Provider store={store}>
        <Employees />
        <BirthdayBlock />
      </Provider>
    </ErrorBoundry>
  );
};

export default App;
