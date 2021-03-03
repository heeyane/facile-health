import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SymptomList from "./SymptomList";
import {Button} from "./Button";

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [symptomListDefault, setSymptomListDefault] = useState();
    const [symptomList, setSymptomList] = useState();

    const fetchData = async () => {
        return await fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms?language=en-gb&format=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8601a9bb56mshf0067549e2ddf73p143b20jsnd0f9360f365b",
                "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com"
            }
        }).then(response => response.json())
            .then(data => {
                setSymptomList(data)
                setSymptomListDefault(data)
            });}

    const updateInput = async (input) => {

        const filtered = symptomListDefault.filter(symptom => {
            return symptom.Name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setSymptomList(filtered);
    }

    useEffect( () => {fetchData()},[]);

    return (
        <>
            <h1>Symptom List</h1>
            <SearchBar
                input={input}
                onChange={updateInput}
            />

            <SymptomList symptomList={symptomList}/>
        </>
    );
}

export default SearchPage