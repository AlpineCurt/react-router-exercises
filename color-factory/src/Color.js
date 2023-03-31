import React from "react";
import { useParams, Redirect } from "react-router-dom";
import "./Color.css";

const Color = ({colors}) => {
    const {color} = useParams();
    if (Object.keys(colors).indexOf(color) === -1) return <Redirect to="/colors"/>
    return (
        <div className="Color">
            <h3>So Pretty!</h3>
            <div
                className="Color-circle"
                style={{
                    backgroundColor: colors[color]
                }}
            >
            </div>
        </div>
    )
}

export default Color;