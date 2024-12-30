import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Player } from '../PlayerTable';

export default function DraftList() {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('http://localhost:5163/Player/GetAllPlayers')
      .then((response) => response.json())
      .then((data: Player[]) => {
        const filteredPlayers = data.filter(p => p.managerId === null); // Keep only unassigned players
        filteredPlayers.sort((a, b) => a.rank - b.rank);
        setAllPlayers(filteredPlayers);
      })
      .catch((error) => console.error('Error fetching players:', error));
  }, []); // Empty dependency array ensures this runs only once

  function renderRow(props: ListChildComponentProps) {
    const { index, style, data } = props;
    const allPlayers = data as Player[]; // Access the passed `allPlayers`
    const player = allPlayers[index];

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText
            primary={`${player.rank}. ${player?.player_Name} (${player?.position} - ${player?.team})`}
          />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <div>
      <br />
      <br />
      DRAFT PLAYER
      <br />
      <br />
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={400}
          width={400}
          itemSize={46}
          itemCount={allPlayers.length}
          overscanCount={5}
          itemData={allPlayers} // Pass allPlayers to renderRow
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      <br />
      <br />
      <button>DRAFT</button>
    </div>


  );
}
