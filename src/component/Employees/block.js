import React from "react";
import "./Employees.css";

const Block = ({ letter, res, func, text }) => {
  const list = res.filter((item) => item.lastName.includes(letter));
  const listNew = list.length ? (
    list.map(({ id, firstName, lastName, dob }) => {
      const store = JSON.parse(localStorage.getItem("users")) || undefined;
      let ok = store ? store.find((item) => item.id === id) : undefined;
      const inp = ok ? (
        <input
          className={"inp"}
          onChange={() =>
            func({ id, firstName, lastName, dob, checked: false })
          }
          type="checkbox"
          defaultChecked
        />
      ) : (
        <input
          className={"inp"}
          onChange={() => func({ id, firstName, lastName, dob, checked: true })}
          type="checkbox"
        />
      );

      return (
        <div className={"list-block"} key={id}>
          <div className={"n-block"}>{`${lastName} ${firstName}`}</div>
          {inp}
        </div>
      );
    })
  ) : (
    <div className={"list-block"}>{text}</div>
  );

  return listNew;
};

export default Block;
