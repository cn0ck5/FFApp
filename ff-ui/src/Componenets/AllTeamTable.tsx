import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

interface TeamTableProps {
    managers: Manager[];
}

export default function AllTeamTable({ managers }: TeamTableProps) {

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
                    {managers.map((manager) => (
                        <StyledTableRow key={manager.managerId}>
                            <StyledTableCell component="th" scope="row">
                                {manager.teamName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{manager.draft_Position}</StyledTableCell>
                            <StyledTableCell align="right">{manager.qB_Count}</StyledTableCell>
                            <StyledTableCell align="right">{manager.rB_Count}</StyledTableCell>
                            <StyledTableCell align="right">{manager.wR_Count}</StyledTableCell>
                            <StyledTableCell align="right">{manager.tE_Count}</StyledTableCell>
                            <StyledTableCell align="right">{manager.dsT_Count}</StyledTableCell>
                            <StyledTableCell align="right">{manager.k_Count}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}