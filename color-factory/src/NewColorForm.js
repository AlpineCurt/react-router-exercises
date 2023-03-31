import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({addColor}) => {
    const INITIAL_STATE = {
        colorName: "",
        colorHex: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addColor({[formData.colorName]: formData.colorHex});
        history.push("/colors");
    }

    return (
        <div className="NewColorForm">
            <h3>Add a New Color!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-colorName">Name your new Color!</label>
                <input
                    id="form-colorName"
                    type="text"
                    name="colorName"
                    onChange={handleChange}
                    value={formData.colorName}
                    placeholder="Name your new color!"
                />
                <input 
                    id="form-color"
                    type="color"
                    name="colorHex"
                    onChange={handleChange}
                    value={formData.colorHex}
                />
                <button>Add Color</button>
            </form>
        </div>
    )

}

export default NewColorForm;