import React from "react";
import DogDetails from "./DogDetails";
import { useParams, Redirect } from "react-router-dom";

const DogList = ({ dogs }) => {
    const {dogName} = useParams();
    let dogList = dogName ? dogs.filter(dog => dog.name.toLowerCase() === dogName.toLowerCase()) : [...dogs];
    if (dogList.length === 0) return <Redirect to="/dogs"/>
    return (
        <div className="DogList">
            {dogList.map(({name, age, src, facts}) => (
                <DogDetails
                    name={name}
                    age={age}
                    src={src}
                    facts={facts}
                />
            ))}
        </div>
    );
}

export default DogList;