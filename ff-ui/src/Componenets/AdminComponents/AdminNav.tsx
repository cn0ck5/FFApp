import { useState } from "react";
import AddManager from "./AddManager";
import SetManagerDraftPosition from "./SetManagerDraftPosition";
import SetAllPicks from "./SetAllPicks";
import AllTeamTable, { Manager } from "../AllTeamTable";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



interface AdminNavProps {
    managers: Manager[];
}

const AdminNav: React.FC<AdminNavProps> = ({ managers }) => {
    const [addManagerIsVisible, setAddManagerIsVisible] = useState(false);
    const [draftPositionIsVisible, setDraftPositionIsVisible] = useState(false);
    const [allPicksIsVisible, setAllPicksIsVisible] = useState(false);

    function handleAddManagerButton() {
        setAddManagerIsVisible(true);
        setDraftPositionIsVisible(false);
        setAllPicksIsVisible(false);
    }

    function handleSetDraftPosButton() {
        setAddManagerIsVisible(false);
        setDraftPositionIsVisible(true);
        setAllPicksIsVisible(false);
    }

    function handleSetAllPicksButton() {
        setAddManagerIsVisible(false);
        setDraftPositionIsVisible(false);
        setAllPicksIsVisible(true);
    }

    return (
        <div id="admin-nav-container">
            <div id="manager-nav-buttons">
                <Stack direction="row" spacing={2}>
                    <Button onClick={handleAddManagerButton}>Add Manager</Button>
                    <Button onClick={handleSetDraftPosButton}>Set Draft Position</Button>
                    <Button onClick={handleSetAllPicksButton}>Set All Picks</Button>
                </Stack>
            </div>
            <br />
            {addManagerIsVisible && <AddManager />}
            {draftPositionIsVisible && <SetManagerDraftPosition managers={managers} />}
            {allPicksIsVisible && <SetAllPicks />}
            <AllTeamTable managers={managers} />
        </div>
    );
}

export default AdminNav;
