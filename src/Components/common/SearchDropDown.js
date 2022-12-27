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
    fullWidth
    size='small'
    disabled={disabled}
      disablePortal
      onChange={(event, newValue) => {
        onChange(newValue.value);
      }}
      id="combo-box-demo"
      options={dropDownList}
      sx={{ width:  "100%" }}
      renderInput={(params) => <TextField fullWidth
          size='small' required={required} {...params} label="skills" />}
    />
  );
}

 
export default SearchDropDown;
 
