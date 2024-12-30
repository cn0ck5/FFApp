import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

interface DraftCardProps {
  pick: number,
  round: number,
  manager: string,
  playerSelection?: string,
}

export default function DraftCard({ pick, round, manager, playerSelection = '' }: DraftCardProps) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            odd: '#D3D3D3',
            even: '#778899',
            selected: '#FF6666'
          },
        },
      }}
    >
      <Box
        sx={{
          width: 120,
          height: 90,
          padding: 1,
          margin: .5,
          borderRadius: 1,
          bgcolor: playerSelection !== '' ? 'primary.selected' :
            pick % 2 === 0 ? 'primary.even' : 'primary.odd',
          color: 'black',
          display: 'flex', // Use flexbox for layout
          flexDirection: 'column', // Stack children vertically
          alignItems: 'center', // Center children horizontally
          justifyContent: 'center', // Center children vertically
          textAlign: 'center', // Center text within each div
          border: '2px solid transparent', // Initial border
          '&:hover': {
            borderColor: '#1b1b1b',
          },
        }}
      >
        <div
          style={{
            alignSelf: 'center', // Center horizontally
            marginTop: 0, // Top margin for alignment
            justifyContent: 'top'
          }}
        >
          R:{round} P:{pick}
        </div>
        <div>{playerSelection}</div>
      </Box>
    </ThemeProvider>
  );
}