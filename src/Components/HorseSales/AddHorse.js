import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HorseForm from "./HorseForm";
import axios from "axios";


function AddHorse() {

    const navigate = useNavigate();

    const [horse, setHorse] = useState({ breed: "", photo: "", description: "" });


    const submitForm = async (event) => {
      event.preventDefault();
      try {
        await axios.post(
          "https://westwindexpress.onrender.com/horses",
          { data: horse }
        );
        console.log("Horse saved!")
        setHorse({ breed: "", photo: "", description: "" });
        navigate("/horsesales");
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    const changeForm = ({ target }) => {
      setHorse({ ...horse, [target.name]: target.value });
    };


    return (
        <div className="col-9 mx-auto">
            <div className="row pl-3 pb-2">
                <HorseForm
                    submitForm={submitForm}
                    changeForm={changeForm}
                    horse={horse}
                 />
            </div>
        </div>
    )
}

export default AddHorse;