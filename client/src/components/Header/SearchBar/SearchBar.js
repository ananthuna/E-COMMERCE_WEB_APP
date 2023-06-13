import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import InputAdornment from '@mui/material/InputAdornment';
import SelectButton from '../../SelectButton/SelectButton'
import { UserContext } from '../../../Context/Context'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '&::placeholder': {
    fontStyle: 'italic',
    color: 'green'
  },
  "& .MuiInputBase-root": {
    // color: 'b'
  }
});


function SearchBar() {

  const [searchInput, setSearchInput] = useState("");
  const { allItems, setSearch } = useContext(UserContext)
  const categorys = [
    'All Collections',
    'Mobiles & Tablets',
    'laptops & computers',
    'Smart watches',
    'Electronics',
    'Camera',
    'Headphones',
    'Speakers'
  ];

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchInput(e.target.value)
  }

  //search product by category
  const searchByCategory = (text) => {
    var array = []
    array = [...allItems.filter((item) => item.category.toLowerCase() === text.toLowerCase())]
    return array
  }

  //search by brant
  const searchByBrant = (text, Items) => {
    var array = []
    array = [...Items.filter((item) => item.brant.toLowerCase() === text.toLowerCase())]
    return array
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search input');
    console.log(searchInput);
    let text = searchInput
    if (text === '') return setSearch({ items: [], title: '' })
    let textArray = text.split(' ')
    var array = []
    let category = true
    let brant = true
    for (let t of textArray) {
      if (category) {
        var color = searchByCategory(t, allItems)
        if (color.length > 0) {
          array.push(...color)
          category = false
        }
      }
      if (brant) {
        var type = searchByBrant(t, array)
        if (type.length > 0) {
          array = [...type]
          brant = false
        }
      }
    }
    // console.log(array);
    setSearch({ items: [...array], title: text })

  };




  return (
    <Box sx={{
      width: '100%',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      pt: 0.4
    }}>
      <Box sx={{
        borderRight: 1,
        borderColor: 'grey.500',
        height: '2.5rem'
      }}>
        <SelectButton categorys={categorys} />
      </Box>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <CssTextField
          id="search"
          className="text"
          name='search'
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            )
          }}
          placeholder="Search our product..."
          size="small"
          onChange={handleChange}
        // value={searchInput}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: 'black',
            ml: 1,
            mr: 1,
            '&:hover': {
              backgroundColor: 'black',
            }
          }} startIcon={< SearchIcon />}>
          search
        </Button>
      </Box>
    </Box>
  )
}
export default SearchBar