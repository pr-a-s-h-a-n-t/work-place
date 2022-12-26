import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchDropDown({
  dropDownList,
  val,
  onChange,
  disabled,
  required
}) {
  return (
    <Autocomplete
    disabled={disabled}
      disablePortal
      onChange={(event, newValue) => {
        onChange(newValue.value);
      }}
      id="combo-box-demo"
      options={dropDownList}
      sx={{ width: "200px",height: "2.35rem" 
      , border: "1px solid green"
      // height: "1rem"
       }}
       
      renderInput={(params) => <TextField
          
      // height: "1rem"
     
      
       required={required} {...params}  />}
    />
  );
}

 
export default SearchDropDown;
 
