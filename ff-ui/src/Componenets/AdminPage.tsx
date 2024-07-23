import React from 'react';
import AddManager from './AdminComponents/AddManager';
import SetManagerDraftPosition from './AdminComponents/SetManagerDraftPosition';
import AllTeamTable from './AllTeamTable';
import { Manager } from './AllTeamTable';

type ManagerProps = {
    managers: Manager[];
    setManagers: (user: any) => void;
}

function Admin({managers, setManagers}: ManagerProps) {
    return( 
        <div id ="adminPage">
            <AddManager />
            <SetManagerDraftPosition managers = {managers} />
            <AllTeamTable managers = {managers} />
        </div>
    );
}

export default Admin;