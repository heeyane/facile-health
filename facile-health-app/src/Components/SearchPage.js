import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SymptomList from "./SymptomList";

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
            <br/>
            <h2>Symptom List</h2>
            <br/>
            <h3>Search your symptoms here to check our service availability and feasibility of treatment via tele-medicine.</h3>
            <br/>
            <SearchBar
                input={input}
                onChange={updateInput}
            />

            {input.length > 3 && <SymptomList symptomList={symptomList}/>}

        </>
    );
}

export default SearchPage