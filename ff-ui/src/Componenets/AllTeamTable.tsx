import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

export type Manager = {
    managerId: string;
    teamName: string;
    draft_Position: number;
    qB_Count: number;
    rB_Count: number;
    wR_Count: number;
    tE_Count: number;
    dsT_Count: number;
    k_Count: number;

};



export default function AllTeamTable() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(
        managerId: string,
        teamName: string,
        draft_Position: number,
        qB_Count: number,
        rB_Count: number,
        wR_Count: number,
        tE_Count: number,
        dsT_Count: number,
        k_Count: number,
    ) {
        return { managerId, teamName, draft_Position, qB_Count, rB_Count, wR_Count, tE_Count, dsT_Count, k_Count };
    }

    const [data, setData] = useState<Manager[]>([]);

    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        fetch('http://localhost:5163/Manager/GetAllManagers')
            .then((response) => response.json())
            
            .then((data: Manager[]) => {
                const sortedData = data.sort((a, b) => a.draft_Position - b.draft_Position);
                setData(data);
                // setUniqueTeams([...new Set(data.map((item) => item.managerId))]);
                // setUniquePositions([...new Set(data.map((item) => item.draftPosition))]);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const rows = data.map((manager) =>
        createData(
            manager.managerId,
            manager.teamName,
            manager.draft_Position,
            manager.qB_Count,
            manager.rB_Count,
            manager.wR_Count,
            manager.tE_Count,
            manager.dsT_Count,
            manager.k_Count
        )
    );




    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Manager Name</StyledTableCell>
                        <StyledTableCell align="right">Draft Position</StyledTableCell>
                        <StyledTableCell align="right">QB Count&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">RB Count&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">WR Count&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">TE Count&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">DST Count&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">K Count&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((data) => (
                        <StyledTableRow key={data.managerId}>
                            <StyledTableCell component="th" scope="row">
                                {data.teamName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{data.draft_Position}</StyledTableCell>
                            <StyledTableCell align="right">{data.qB_Count}</StyledTableCell>
                            <StyledTableCell align="right">{data.rB_Count}</StyledTableCell>
                            <StyledTableCell align="right">{data.wR_Count}</StyledTableCell>
                            <StyledTableCell align="right">{data.tE_Count}</StyledTableCell>
                            <StyledTableCell align="right">{data.dsT_Count}</StyledTableCell>
                            <StyledTableCell align="right">{data.k_Count}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
