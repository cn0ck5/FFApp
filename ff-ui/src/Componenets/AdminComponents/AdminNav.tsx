import { useState } from "react";
import AddManager from "./AddManager";
import SetManagerDraftPosition from "./SetManagerDraftPosition";
import SetAllPicks from "./SetAllPicks";


function AdminNav(){

const [addManagerIsVisible, setAddManagerIsVisible] = useState(false);
const [draftPoistionIsVisible, SetDraftPositionIsVisible] = useState(false);
const [allPicksIsVisible, setAllPicksIsVisible] = useState(false);


function handleAddManagerButton () {

    setAddManagerIsVisible(true);
    SetDraftPositionIsVisible(false);
    setAllPicksIsVisible(false);
}
function handleSetDraftPosButton () {

    setAddManagerIsVisible(false);
    SetDraftPositionIsVisible(true);
    setAllPicksIsVisible(false);
}
function handleSetAllPicksButton () {

    setAddManagerIsVisible(false);
    SetDraftPositionIsVisible(false);
    setAllPicksIsVisible(true);
}







return(
    <div id="manager-nav-buttons">
        <button id="add-manager-button" onClick={handleAddManagerButton}>Add Manager</button>
        <button id="set-draft-position-button" onClick={handleSetDraftPosButton}>Set Draft Position</button>
        <button id="set-all-picks-button" onClick={handleSetAllPicksButton}>Set All Picks</button>
        <br/>

        {addManagerIsVisible && <AddManager />}
        {draftPoistionIsVisible && <SetManagerDraftPosition />}
        {allPicksIsVisible && <SetAllPicks />}


    </div>
)    

}

export default AdminNav;