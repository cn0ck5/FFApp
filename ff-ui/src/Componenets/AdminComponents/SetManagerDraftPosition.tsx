import { mainModule } from "process";
import { useState, useEffect } from "react";
import { Manager } from "../AllTeamTable";


interface SetDraftPosProps {
    managers: Manager[];
}



function SetManagerDraftPosition({managers}: SetDraftPosProps) {
    
    // const [selectedManager, setSelectedManager] = useState<Manager>();
    const [formData, setFormData] = useState({
        teamName: "",
        pickNum: 0
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event: any) => {

        event.preventDefault();
        try {
           const response = await fetch(`http://localhost:5163/Manager/SetDraftPosition?pos=${formData.pickNum}&managerName=${formData.teamName}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if(!response.ok)
                {
                    alert(await response.text());
                }
        }
        catch (error) {
            console.error("Error setting draft position: ", error);
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ManagerId">Team Name: </label>
            <select
                id="ManagerId"
                name="teamName"
                onChange={handleChange}
                value={formData.teamName}
                required
            >
                <option hidden id="set-draft-pos">
                    Team Name
                </option>
                {managers
                    ? managers.map((manager:Manager) => {
                        return (
                            <option key={manager.managerId}>
                                {manager.teamName}
                            </option>
                        );
                    })
                    : null}
                ;
            </select>
            <input
                type="number" min={1} max={managers.length}
                name="pickNum"
                value={formData.pickNum}
                onChange={handleChange} />
            <button type="submit">Set Draft Position</button>
        </form>
    )



}

export default SetManagerDraftPosition;