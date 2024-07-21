import { mainModule } from "process";
import { useState, useEffect } from "react";

interface Manager {
    teamName: string;
    managerId: string;
}


function SetManagerDraftPosition() {
    const [managers, setManagers] = useState<Manager[]>([]);
    // const [selectedManager, setSelectedManager] = useState<Manager>();
    const [formData, setFormData] = useState({
        teamName: "",
        pickNum: 0
    });

    useEffect(() => {
        try {
            fetch("http://localhost:5163/Manager/GetAllManagers")
                .then((AllManagers) => AllManagers.json())
                .then((data) => {
                    setManagers(data);
                });
        } catch (error) {
            console.error("Error loading managers: ", error);
        }
    }, []);

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
            await fetch(`http://localhost:5163/Manager/SetDraftPosition?pos=${formData.pickNum}&managerName=${formData.teamName}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
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
                    ? managers.map((manager) => {
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