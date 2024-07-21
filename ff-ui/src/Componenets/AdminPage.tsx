import React from 'react';
import AddManager from './AdminComponents/AddManager';
import SetManagerDraftPosition from './AdminComponents/SetManagerDraftPosition';
import AllTeamTable from './AllTeamTable';

function Admin() {
    return( 
        <div id ="adminPage">
            <AddManager />
            <SetManagerDraftPosition />
            <AllTeamTable />
        </div>
    );
}

export default Admin;