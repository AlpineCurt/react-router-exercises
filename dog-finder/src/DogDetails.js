import React from "react";
import "./DogDetails.css";

const DogDetails = ({ name, age, src, facts }) => {
    return (
        <div className="DogList-dog">
            <h4>{name}</h4>
            <p>{age} years old</p>
            <img className="DogList-dog-img" src={src}/>
            <p>Facts about {name}:</p>
            <ul>
                {facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogDetails;