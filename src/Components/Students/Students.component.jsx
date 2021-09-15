import React from "react";

import "./Student.styles.css";
const Students = ({ data }) => {
  
  return (
    <div className="student-card">
      <span className="student-card-left">
        <img src={data.image} alt="img" />
      </span>
      <span className="student-card-right">
        <span className="student-card-chips">Name: {data.name}</span>
        <span className="student-card-chips">House: {data.house}</span>
        <span className="student-card-chips">Date of birth: {data.dateOfBirth}</span>
        <span className="student-card-chips">Wand wood: {data.wand.wood}</span>
        <span className="student-card-chips">Wand core: {data.wand.core}</span>
        <span className="student-card-chips">Wand length: {data.wand.length}</span>
      </span>
    </div>
  );
};

export default Students;
