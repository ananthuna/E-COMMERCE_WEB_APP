import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { UserContext } from '../../Context/Context';


const CssSelect = styled(Select)({
    '.MuiOutlinedInput-notchedOutline': { border: 0 }
});


export default function BasicSelect({ categorys }) {

    const [option, setOption] = React.useState(1);
    const {
        setSearch,
        allItems,
        mobile,
        laptop,
        watch,
        camera,
        headset,
        speaker
    } = React.useContext(UserContext)

    const handleChange = (e) => {
        setOption(e.target.value);
    };



    const handleSelect = (item) => {
        console.log(item);
        if (item === 'All Collections') return setSearch({ items: [...allItems], title: item })
        if (item === 'Mobiles & Tablets') return setSearch({ items: [...mobile], title: item })
        if (item === 'laptops & computers') return setSearch({ items: [...laptop], title: item })
        if (item === 'Smart watches') return setSearch({ items: [...watch], title: item })
        if (item === 'Electronics') return setSearch({ items: [...allItems], title: item })
        if (item === 'Camera') return setSearch({ items: [...camera], title: item })
        if (item === 'Headphones') return setSearch({ items: [...headset], title: item })
        if (item === 'Speakers') return setSearch({ items: [...speaker], title: item })
        // if (item === 'Home Theaters') return setSearch([...allItems])
    }

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
                    <MenuItem onClick={() => handleSelect(item)} key={index} value={index + 1}>{item}</MenuItem>)}
            </CssSelect>
        </Box>
    );
}