import React from 'react';
import AddManager from './AdminComponents/AddManager';
import SetManagerDraftPosition from './AdminComponents/SetManagerDraftPosition';

function Admin() {
    return( 
        <div id ="adminPage">
            <AddManager />
            <SetManagerDraftPosition />
        </div>
    );
}

export default Admin;