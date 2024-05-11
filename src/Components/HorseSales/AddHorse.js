import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HorseForm from "./HorseForm";


function AddHorse() {

    const [horse, setHorse] = useState({ title: "", description: "", horseId: "" });


    return (
        <div className="col-9 mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={"/horsesales"}></Link>
                    </li>
                </ol>
            </nav>
            <div className="row pl-3 pb-2">
                <HorseForm
                    horse={horse}
                />
            </div>
        </div>
    )
}

export default AddHorse;