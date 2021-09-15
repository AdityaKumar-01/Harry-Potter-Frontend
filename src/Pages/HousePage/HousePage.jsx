import React, { useState, useEffect } from "react";
import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";

import axios from "axios";
import Students from "./../../Components/Students/Students.component";

import "./HousePage.styles.css";
const HousePage = () => {
  const [data, setData] = useState();
  const [house, setHouse] = useState("gryffindor");
  useEffect(() => {
    axios
      .get(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [house]);
  return (
    <div className="student-container">
      <Header />
      <div className="student-title">Search your characters by house</div>
      <div className="house-name-container">
        <span className="house-names"
          onClick={() => {
            setHouse("gryffindor");
          }}
        >
          Gryffindor
        </span>
        <span className="house-names"
          onClick={() => {
            setHouse("Slytherin");
          }}
        >
          Slytherin
        </span>
        <span className="house-names"
          onClick={() => {
            setHouse("Hufflepuff");
          }}
        >
          Hufflepuff
        </span>
        <span className="house-names"
          onClick={() => {
            setHouse("Ravenclaw");
          }}
        >
          Ravenclaw
        </span>
      </div>

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

export default HousePage;
