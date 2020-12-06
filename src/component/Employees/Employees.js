import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Employees.css";
import usersData from "../service/service";
import Block from "./block";
import { load, add } from "../../reducer/action";

const Employees = ({ allusers, load, add }) => {
  const { data } = allusers;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersData(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((res) => load(res))
      .then(() => setLoading(false));
  }, [load]);

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const blocks = alphabet.map((item, i) => {
    return (
      <div className={"main-blocks"} key={i}>
        <h2 className={"h2"}>{item}</h2>
        <Block
          letter={item}
          res={data}
          func={add}
          text={"-------------------"}
        />
      </div>
    );
  });

  if (loading) {
    return (
      <div className={"m"}>
        <h1 className={"h1-title"}>Employees</h1>
        <div className={"eploy-block"}>
          <h2>Loading employees</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={"m"}>
      <h1 className={"h1-title"}>Employees</h1>
      <div className={"eploy-block"}>{blocks}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { allusers, choseuser } = state;
  return {
    allusers,
    choseuser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: (data) => dispatch(load(data)),
    add: (user) => dispatch(add(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
