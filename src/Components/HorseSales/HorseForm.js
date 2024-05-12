import React from "react";
import { Link } from "react-router-dom";

function HorseForm({ submitForm, changeForm, horse }) {

  const formStyle = {
    marginTop: "150px",
    marginBottom: "150px",
  };


  return (
    <div className="container" style={formStyle}>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            className="form-control"
            id="breed"
            name="breed"
            value={horse.breed}
            onChange={changeForm}
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
            value={horse.photo}
            onChange={changeForm}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="5"
            value={horse.description}
            onChange={changeForm}
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
