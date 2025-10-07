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
            <span className="text-brand-primary">Escoger sabor</span>
          )
        }
        className="w-full sm:max-w-[40%] rounded-[8px] mt-6 mb-2 sm:mx-4 shadow-[0_4px_14px_rgba(0,0,0,0.10)]"
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#333333",
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: "#eb00d3",
            borderRadius: "8px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d100be",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: "#eb00d3",
          },
          "& .MuiSelect-icon": {
            color: "#eb00d3",
          },
          "& .MuiSelect-select": {
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiPaper-root": {
            borderRadius: "8px",
          },
        }}
        inputProps={{ "aria-label": "Escoger sabor" }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "8px",
              mt: "0.5rem",
              "& .MuiMenuItem-root": {
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "rgba(235, 0, 211, 0.05)",
                },
              },
            },
          },
        }}
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
