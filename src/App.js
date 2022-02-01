import React, { useState, useEffect } from "react";
import axios from "axios";

import AddLotForm from "./AddLotForm";
import LotList from "./LotList";

function App() {
  const [currentLots, setCurrentLots] = useState([]);
  const [newLot, setNewLot] = useState("");

  const handleAddNew = (e) => {
    e.preventDefault();
    setNewLot(e.target[0].value);
    axios
      .post("https://scrap-tracker.herokuapp.com/api/lot", {
        num: e.target[0].value,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://scrap-tracker.herokuapp.com/api/lot")
      .then(function (res) {
        setCurrentLots(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <AddLotForm handleClick={handleAddNew} />
      <LotList lots={currentLots} />
    </div>
  );
}

export default App;
