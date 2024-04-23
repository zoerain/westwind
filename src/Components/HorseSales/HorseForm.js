import React from "react";
import { Link } from "react-router-dom";

function HorseForm({ submitForm, changeForm, horse }) {

    return (
        <form id="horseForm" onSubmit={sumbitForm}>
            <div>
                <label>Horse Breed</label>
                <textarea
                    name="breed"
                    value={horse.breed}
                    onChange={changeForm}
                    id="breed"
                    className="form-control mb-3"
                    placeholder="Horse Breed"
                    rows={1}
                />
                <label>Description</label>
                <textarea
                    name="description"
                    value={horse.description}
                    onChange={changeForm}
                    id="description"
                    className="form-control mb-3"
                    placeholder="Description of the horse"
                />
                <Button type="submit" className="btn btn-primary">
                    Save
                </Button>
                <Link
                    to="/horsesales"
                    className=" btn btn-secondary mr-2"
                    name="done"
                    >
                        Done
                    </Link>
            </div>
        </form>
    )
};

export default HorseForm;