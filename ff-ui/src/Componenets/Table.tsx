import { useMemo, useEffect, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

export type Player = {
  rank: number;
  player_Name: string;
  team: string;
  position: string;
  posRk: number;
  bye: number;
  managerId: number | null;
};

const Example = () => {
  const [data, setData] = useState<Player[]>([]);
  const [uniqueTeams, setUniqueTeams] = useState<string[]>([]);
  const [uniquePositions, setUniquePositions] = useState<string[]>([]);
  const managerStatuses = ['Available', 'Drafted'];

  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    fetch('http://localhost:5163/Player/GetAllPlayers')
      .then((response) => response.json())
      .then((data: Player[]) => {
        setData(data);
        setUniqueTeams([...new Set(data.map((item) => item.team))]);
        setUniquePositions([...new Set(data.map((item) => item.position))]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const columns = useMemo<MRT_ColumnDef<Player>[]>(
    () => [
      {
        accessorKey: 'rank',
        header: 'Rank',
        muiFilterTextFieldProps: { placeholder: 'Rank' },
      },
      {
        accessorKey: 'player_Name',
        header: 'Player Name',
      },
      {
        accessorKey: 'team',
        header: 'Team',
        filterFn: 'equals',
        filterSelectOptions: uniqueTeams.map((team) => ({ text: team, value: team })),
        filterVariant: 'select',
      },
      {
        accessorKey: 'position',
        header: 'Position',
        filterFn: 'equals',
        filterSelectOptions: uniquePositions.map((position) => ({ text: position, value: position })),
        filterVariant: 'select',
      },
      {
        accessorKey: 'posRk',
        header: 'Position Rank',
        muiFilterTextFieldProps: { placeholder: 'Position Rank' },
      },
      {
        accessorKey: 'bye',
        header: 'Bye Week',
      },
      {
        accessorKey: 'managerId',
        header: 'Manager Status',
        Cell: ({ cell }) => {
          const value = cell.getValue<number | null>();
          return value === null ? 'Available' : 'Drafted';
        },
        filterFn: (row, columnId, filterValue) => {
          const value = row.getValue<number | null>(columnId);
          if (filterValue === 'Available') {
            return value === null;
          }
          if (filterValue === 'Drafted') {
            return value !== null;
          }
          return true;
        },
        filterSelectOptions: managerStatuses.map((status) => ({ text: status, value: status })),
        filterVariant: 'select',
      },
    ],
    [uniqueTeams, uniquePositions]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      showColumnFilters: true,
      columnFilters: [{ id: 'managerId', value: 'Available' }],
    },
    muiFilterTextFieldProps: {
      sx: { m: '0.5rem 0', width: '100%' },
      variant: 'outlined',
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
