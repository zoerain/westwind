/*import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HorseForm from "./HorseForm";

function EditHorse() {
    const [horse, setHorse] = useState({ breed: "", description: "", horseId: "" });
    const { horseId } = useParams();
    const navigate = useNavigate();


    //fetch specified horse data
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchHorseInfo() {
            //const response = await readHorse(horseId, abortController.signal);
            EditHorse(() => response);
        };
        fetchHorseInfo();
        return () => abortController.abort();
    }, [horseId]);


     const changeForm = ({ target }) => {
       editHorse({ ...horse, [target.name]: target.value });
     };

     const submitForm = async (event) => {
       event.preventDefault();
       await updateHorse(horse);
       navigate("/horsesales");
     };

     return (
        <div className="col-9 mx-auto">
            <h3>Edit Horse Information</h3>
            <div>
                <HorseForm
                    horse={horse}
                />
            </div>
        </div>
     );
};

export default EditHorse;