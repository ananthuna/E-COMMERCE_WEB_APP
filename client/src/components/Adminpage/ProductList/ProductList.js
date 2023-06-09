import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import axios from '../../../axios'
import { baseUrl } from '../../../url';


function Row({ row, setRows, rows }) {
    const [open, setOpen] = React.useState(false);

    const handleRemove = (item) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.delete(`${baseUrl}/api/item/items/${item._id}`, customConfig)
            .then((res) => {
                const deletedIrem = res.data
                const array = rows
                const newArray = array.filter((item) => item._id !== deletedIrem._id)
                setRows([...newArray])
            })

    }



    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.offer}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right"><Button>Edit</Button></TableCell>
                <TableCell align="right"><Button onClick={() => handleRemove(row)}>Remove</Button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function CollapsibleTable() {
    const [rows, setRows] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/item/items').then((doc) => {
            setRows(doc.data)
            // console.log(doc.data);
        })
    }, [])


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Catogary</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price&nbsp;(INR)</TableCell>
                        <TableCell align="right">Offer&nbsp;(g)</TableCell>
                        <TableCell align="right">Weight&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} setRows={setRows} rows={rows} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}