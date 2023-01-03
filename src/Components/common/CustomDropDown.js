import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DarkmodeContext } from "../../contex/darkmode/index";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CustomDropDown({ dropDownList, val, onChange, required, disabled }) {
  const [state, dispatch] = React.useContext(DarkmodeContext);

  const theme = useTheme();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div
      style={{
        color: state.shades.secondary,
        backgroundColor: state.shades.primary,
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <Select
          sx={{
            color: state.shades.secondary,
            backgroundColor: state.shades.primary,
          }}
          fullWidth
          size="small"
          disabled={disabled}
          required={required}
          id="demo-simple-select"
          value={val}
          onChange={handleChange}
        >
          {dropDownList.map((item) => (
            <MenuItem
              // PaperProps={{
              //   style: {
              //     backgroundColor: state.shades.solutionCardBackground,
              //     color: state.shades.secondary,
              //   },
              // }}
              // style={{

              //   backgroundColor: state.shades.solutionCardBackground,
              //   color: state.shades.secondary,
              // }}
 
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomDropDown;
