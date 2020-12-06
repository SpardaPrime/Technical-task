import React from "react";
import "./birthdayBlock.css";

const List = ({ users }) => {
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

  const usersblock = users
    .sort((a, b) => (a.dob.day > b.dob.day ? +1 : -1))
    .map(({ id, firstName, lastName, dob }) => {
      const { day, mounth, year } = dob;
      return (
        <div className={"b-us"} key={id}>
          <div className={"f-block"}>{`${lastName} ${firstName}`}</div>
          <div
            className={"f-block"}
          >{`${day} ${arrMounth[mounth]}, ${year} year`}</div>
        </div>
      );
    });
  return usersblock;
  
};

export default List;
