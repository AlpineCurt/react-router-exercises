import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
    const newColors = Object.keys(colors);
    return (
        <div className="ColorList">
            <ul>
                {newColors.map(color => (
                    <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default ColorList;