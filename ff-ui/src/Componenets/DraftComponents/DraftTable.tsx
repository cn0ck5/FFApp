import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DraftCard from './DraftCard'; // Import your DraftCard component
import { useEffect, useState } from 'react';

export type Manager = {
  teamName: string;
  draft_Position: number;
  managerId: number | null;
};

function DraftTable() {
  //const rounds = 15; // Number of rounds
  const [numberOfTeams, setNumberOfTeams] = useState(0); // Picks per round
  const [data, setData] = useState<Manager[]>([]);
  const [draftOrder, setDraftOrder] = useState<Manager[]>([]);
  const [rounds, setRounds] = useState(0);

    useEffect(() => {
      fetch('http://localhost:5163/Manager/GetAllManagers')
        .then((response) => response.json())
        .then((data: Manager[]) => {
          setData(data);
          setNumberOfTeams(data.length);
          data.sort((a, b) => a.draft_Position - b.draft_Position);
          setDraftOrder(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(data);
  // Create a 2D array representing the draft grid
  const draftGrid = Array.from({ length: rounds }, (_, round) =>
    Array.from({ length: numberOfTeams }, (_, pick) => ({
      round: round + 1,
      pick: pick + 1,
      manager: `Manager ${round * numberOfTeams + pick + 1}`, // Example manager names
      playerSelection: 'Player Player', // Example: Add actual player selection if available
    }))
  );

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto' }}>
      <Table>
        {/* Column Headers */}
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Round
            </TableCell>
            {Array.from({ length: numberOfTeams }, (_, index) => (
              <TableCell key={index} align="center" sx={{ fontWeight: 'bold' }}>
                {draftOrder[index].teamName}
              </TableCell> 
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {draftGrid.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {/* Row Header for Round */}
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Round {rowIndex + 1}
              </TableCell>

              {/* Picks for the Round */}
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  <DraftCard
                    round={cell.round}
                    pick={cell.pick}
                    manager={cell.manager}
                    playerSelection={cell.playerSelection}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DraftTable;



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid2';
// import DraftCard from './DraftCard';
// import FullPageLayout from '../BaseComponent/FullPageLayout';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

// export default function DraftTable() {
//   return (
//           <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={.25}>
//         <Grid size={1.5}>
//            <DraftCard round={1} pick={1} manager={"Corey"} playerSelection="Milo" /> 
//         </Grid>
//         <Grid size={1.5}>
//           <DraftCard round={1} pick={2} manager={"Jimmy"} />
//         </Grid>
//         <Grid size={1.5}>
//           <DraftCard round={1} pick={3} manager={"Timmy"} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


// import DraftCard from "./DraftCard";



// export default function DraftTable() {
//     return(
//         <div>
//             <DraftCard round={1} pick={1} manager={"Corey"} playerSelection="Milo" />
//             <DraftCard round={1} pick={2} manager={"Jimmy"} />
//             <DraftCard round={1} pick={3} manager={"Timmy"} />

            
//         </div>

//     );
// }