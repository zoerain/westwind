import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HorseForm from "./HorseForm";


function AddHorse() {

    const [horse, setHorse] = useState({ title: "", description: "", horseId: "" });
    const { horseId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        const
    })
}