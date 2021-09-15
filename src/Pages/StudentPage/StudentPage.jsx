import React, { useState, useEffect } from "react";
import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";

import axios from "axios";
import Students from "./../../Components/Students/Students.component";

import "./StudentPage.styles.css" 
const StudentPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters/students")
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="student-container">
      <Header />
      <div className="student-title">Young minds at Hogwarts</div>
      <div className="student-container">
        {data
          ? data.map((item) => {
              return <Students data={item} />;
            })
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default StudentPage;
