import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';


const CssSelect = styled(Select)({
    '.MuiOutlinedInput-notchedOutline': { border: 0 }
});


export default function BasicSelect({ categorys }) {

    const [option, setOption] = React.useState(1);

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    return (
        <Box sx={{
            width: '10rem',
            height: '3rem',
            ml: 1,
            mt: -1
        }}>
            <CssSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{
                    disableScrollLock: true,
                }}
                value={option}
                onChange={handleChange}
                sx={{ width: '10rem' }}
            >
                {categorys && categorys.map((item, index) =>
                    <MenuItem key={index} value={index + 1}>{item}</MenuItem>)}
            </CssSelect>
        </Box>
    );
}