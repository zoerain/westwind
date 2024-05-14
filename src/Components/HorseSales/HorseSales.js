import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Horse from "./Horse";
import axios from "axios";

function HorseSales() {
  const [horses, setHorses] = useState([]);
  const navigate = useNavigate();

  const horsesStyle = {
    marginTop: "150px",
    marginBottom: "150px",
  };

  // Fetch all horses data
  useEffect(() => {
    async function fetchHorses() {
      try {
        const response = await axios.get(
          "https://westwindexpress.onrender.com/horses"
        );
        setHorses(response.data);
      } catch (error) {
        console.error("Error fetching horses:", error);
      }
    }
    fetchHorses();
  }, []);

  // Handle deletion of a horse
  async function handleDelete(horseId) {
    try {
      await axios.delete(
        `https://westwindexpress.onrender.com/horses/${horseId}`
      );
      console.log("Horse deleted");
      setHorses(horses.filter((horse) => horse.id !== horseId));
      navigate("/horsesales");
    } catch (error) {
      console.error("Something went wrong", error);
    }
  }

  return (
    <div className="container">
      <Link
        className="btn btn-secondary mb-2"
        to="/horsesales/addhorse"
        style={{ marginTop: "150px" }}
      >
        Add Horse
      </Link>
      <div className="row">
        {horses.map((horse) => (
          <div
            className="row col-lg-12 col-md-12 col-sm-12 mx-auto"
            key={horse.id}
            style={horsesStyle}
          >
            <Horse horse={horse} onDelete={() => handleDelete(horse.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorseSales;
