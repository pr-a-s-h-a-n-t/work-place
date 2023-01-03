import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DarkmodeContext } from "../../contex/darkmode/index";

function SearchDropDown({
  dropDownList,
  val,
  onChange,
  disabled,
  required
}) {
  const [state, dispatch] = React.useContext(DarkmodeContext);

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
       
      renderInput={(params) => <TextField 
       
      fullWidth
          size='small' required={required} {...params} />}
    />
  );
}

 
export default SearchDropDown;
 
