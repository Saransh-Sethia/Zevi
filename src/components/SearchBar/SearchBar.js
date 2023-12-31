import React from 'react';
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({query, handleSearch}) => {
  return (
    <div>
       <TextField 
       type="text"
       sx={{width:"500px"}}
       id="outlined-basic" 
       label="Search Products" 
       variant="outlined"
       value={query}
       onChange={handleSearch}
       InputProps={{ 
        endAdornment:  
        <InputAdornment disableTypography position="end"> 
            <SearchIcon />
       </InputAdornment>
    }} 
     />
    </div>
  )
}

export default SearchBar
