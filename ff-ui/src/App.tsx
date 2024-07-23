import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerTable from './Componenets/Table';
import AdminNav from './Componenets/AdminComponents/AdminNav';
import { useState, useEffect } from 'react';
import { Manager } from './Componenets/AllTeamTable';

function App() {

const [managers, setManagers] = useState<Manager[]>([]);


    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        fetch('http://localhost:5163/Manager/GetAllManagers')
            .then((response) => response.json())
            
            .then((data: Manager[]) => {
                const sortedData = data.sort((a, b) => a.draft_Position - b.draft_Position);
                setManagers(data);
                // setUniqueTeams([...new Set(data.map((item) => item.managerId))]);
                // setUniquePositions([...new Set(data.map((item) => item.draftPosition))]);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return (
    <BrowserRouter> 
    <Routes> 

      <Route path="/" element = {<PlayerTable />} />
      <Route path="/admin" element = {<AdminNav managers = {managers} />} />


    </Routes>

    </BrowserRouter>

  );
}

export default App;
