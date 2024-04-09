import React, { useState } from "react";

const AutoSuggest = () => {
    const [age, setAge] = useState({
        ageis: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setAge({ ...age, [name]: value });
        suggestionSelector(value); // Pass the value directly, not e.target.value
    }

    const suggestionSelector = (age) => {
        age = parseInt(age); // Convert age to integer
        if (5 <= age && age <= 12) {
            alert("5-10");
        } else if (13 <= age && age <= 18) {
            alert("10-20");
        } else if (19 <= age && age <= 30) {
            alert("15-30");
        } else if (31 <= age && age <= 65) {
            alert("20-45");
        } else if (age >= 66) {
            alert("15-30");
        }
    }

    return (
        <input 
            placeholder="enter the age" 
            name="age" 
            value={age.ageis} 
            onChange={changeHandler} // Add onChange event handler
        />
    );
}

export default AutoSuggest;
