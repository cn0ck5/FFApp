import { useEffect, useState } from "react";



function SetAllPicks() {

    const [rounds, setRounds] = useState<number>(0);
    
    
    const handleSubmit = async (event: any) => {

        event.preventDefault();
        try {
            await fetch(`http://localhost:5163/Draft/SetDraftOrder?rounds=${rounds}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
        }
        catch (error) {
            console.error("Error setting draft position: ", error);
        }

    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setRounds(parseInt(value, 10));
    };





    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="number">Rounds: </label>
            <input
                type="number"
                min={1}
                max={20}
                name="rounds"
                value={rounds} 
                onChange={handleChange}/>
            <button id="set-all-picks-button" type="submit">Set All Picks</button>
        </form>

    )
}

export default SetAllPicks;