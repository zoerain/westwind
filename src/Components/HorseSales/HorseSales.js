import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Horse from "./Horse";
const axios = require("axios");

function HorseSales() {

    const [horses, setHorses] = useState([]);
    const navigate = useNavigate();

    const horsesStyle = {
        marginTop: "150px",
        marginBotton: "150px",
    };

    
    //fetch all horses data
    useEffect(() => {
        async function fetchHorses() {
            const abortController = new AbortController();
            try {
                const response = await axios.get(
                  "https://westwindexpress.onrender.com/horses"
                );
                  setHorses(response);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    throw error;
                }
            }
            return () => {
                abortController.abort();
            };
        }
        fetchHorses();
    }, [horses])
    
    async function handleDelete(horse) {
        const confirm = window.confirm("Delete this horse from the sales list? You will not be able to recover it.");
        if (confirm) {
            //await deleteHorse(horse.id);
            navigate("/horsesales");
        }
    };

    return (
      <div className="container">
        <Link className="btn btn-secondary mb-2" to="/horsesales/new">
          Add Horse
        </Link>
        <div className="row">
          {horses.map((horse) => (
            <div className="row col-lg-12 col-md-12 col-sm-12 mx-auto" key={horse.id} style={horsesStyle}>
              <Horse horse={horse} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    );
};


export default HorseSales;