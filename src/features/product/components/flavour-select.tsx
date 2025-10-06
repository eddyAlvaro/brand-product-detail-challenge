import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

type Props = {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const FlavourSelect = ({
  label = "Sabor:",
  options,
  value,
  onChange,
}: Props) => {
  return (
    <FormControl fullWidth>
      <FormLabel className="my-3 text-[16px] text-subtle">{label}</FormLabel>
      <Select
        value={value}
        onChange={(e: SelectChangeEvent<string>) => onChange(e.target.value)}
        displayEmpty
        renderValue={(selected) =>
          selected ? (
            selected
          ) : (
            <span className="text-zinc-400">Escoger sabor</span>
          )
        }
        className="w-full sm:max-w-[40%] rounded-[8px]"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: "#eb00d3",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d100be",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d100be",
          },
        }}
        inputProps={{ "aria-label": "Escoger sabor" }}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FlavourSelect;
