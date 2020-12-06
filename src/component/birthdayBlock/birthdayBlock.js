import React from "react";
import { connect } from "react-redux";
import "./birthdayBlock.css";
import List from "./list";

const BirthdayBlock = ({ choseuser }) => {
  const { users } = choseuser;

  const arrMounth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const lists = arrMounth.map((item, i) => {
    let month;
    users.forEach(({ dob }) => {
      if (arrMounth[dob.mounth] === item) {
        month = arrMounth[dob.mounth];
      }
    });
    if (month === item) {
      const newusers = users.filter(
        ({ dob }) => arrMounth[dob.mounth] === month
      );
      return (
        <div className={"bl-list"} key={i}>
          <h2 className={"h2-b-block"}>{item}</h2>
          <List users={newusers} />
        </div>
      );
    } else {
      return null;
    }
  });
  if (users.length === 0) {
    return (
      <div className={"b-block"}>
        <h1 className={"h1-title"}>Employees birthday</h1>
        <div className={"n-select"}>
          <h2>{"No selected employees"}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className={"b-block"}>
      <h1 className={"h1-title"}>Employees birthday</h1>
      {lists}
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { choseuser } = state;
  return {
    choseuser,
  };
};

export default connect(mapStateToProps)(BirthdayBlock);
