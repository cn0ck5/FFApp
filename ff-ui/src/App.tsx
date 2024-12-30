import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerTable from './Componenets/PlayerTable';
import AdminNav from './Componenets/AdminComponents/AdminNav';
import { useState, useEffect } from 'react';
import { Manager } from './Componenets/AllTeamTable';
import DraftTable from './Componenets/DraftComponents/DraftTable';
import DraftList from './Componenets/AdminComponents/DraftList';
import FullPageLayout from './Componenets/BaseComponent/FullPageLayout';
function App() {

const [managers, setManagers] = useState<Manager[]>([]);



useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    fetch('http://localhost:5163/Manager/GetAllManagers')
      .then((response) => response.json())

      .then((data: Manager[]) => {
        const sortedData = data.sort((a, b) => a.draft_Position - b.draft_Position);
        setManagers(sortedData);
        // setUniqueTeams([...new Set(data.map((item) => item.managerId))]);
        // setUniquePositions([...new Set(data.map((item) => item.draftPosition))]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <BrowserRouter>
      <FullPageLayout>
        <Routes>
          <Route path="/" element={<PlayerTable />} />
          <Route path="/DraftTable" element={<DraftTable />} />
          <Route path="/admin" element={<AdminNav managers={managers} />} />
          <Route path="/DraftList" element={<DraftList />} />
        </Routes>
      </FullPageLayout>
    </BrowserRouter>
  )
}

export default App;
