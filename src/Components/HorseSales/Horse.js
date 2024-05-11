import React from "react";

function Horse({ horse, onDelete }) {
  return (
    <div className="card col-sm-11 col-md-11 col-lg-10">
      <img
        src={horse.photo} // Assuming the photo URL is provided in the horse object
        className="card-img-top"
        alt={`Photo of ${horse.breed}`}
      />
      <div className="card-body">
        <h5 className="card-title">{horse.breed}</h5>
        <p className="card-text">{horse.description}</p>
        <hr></hr>
        <p>If interested, contact examplegmail@gmail.com</p>
        <button className="btn btn-danger" onClick={() => onDelete(horse)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Horse;
