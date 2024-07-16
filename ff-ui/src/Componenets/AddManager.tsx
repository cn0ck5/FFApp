import React from "react";
import { useState, useEffect } from "react";



function AddManager() {

    const [managerName, SetManagerName] = useState("");
    const [submitText, SetSubmitText] = useState("");

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        SetManagerName(evt.target.value);
    }

    const submitAddManager = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
                try {
                    const response = await fetch(`http://localhost:5163/Manager/NewManager?managerName=${managerName}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    if(!response.ok)
                        {
                            alert(await response.text());
                        }
                } catch (error) {
                    console.error(error);
                    
                }
            }

    return (
        <div id ="add-manager-container">
            <form onSubmit={submitAddManager} id ="add-manager-form">
                <input
                    type="text"
                    placeholder="Manager Name"
                    onChange={handleChange} 
                    value = {managerName} 
                    id = "managerName" 
                    required />
                    <br />
                <button type="submit">Add Manager</button>
                <h3>{submitText}</h3>
            </form>

        </div>
    )


}

export default AddManager;