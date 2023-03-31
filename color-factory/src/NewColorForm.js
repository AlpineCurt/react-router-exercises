import React, {useState} from "react";

const NewColorForm = () => {
    const INITIAL_STATE = {
        colorName: "",
        colorHex: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormData(INITIAL_STATE);
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