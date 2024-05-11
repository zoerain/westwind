import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function HorseForm({ horse }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    horse || { breed: "", photo: "", description: "", horseId: "" }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://westwindexpress.onrender.com/horses", formData);
      navigate("/horsesales");
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const formStyle = {
    marginTop: "150px",
    marginBotton: "150px",
  };

  return (
    <div className="container" style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            className="form-control"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo URL:</label>
          <input
            type="text"
            className="form-control"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Save
        </button>
        <Link to="/horsesales" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default HorseForm;
