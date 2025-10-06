import type { DeliveryType } from "../types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DeliveryIcon, StoreIcon } from "../../../components/icons";

type Props = {
  value: DeliveryType;
  onChange: (value: DeliveryType) => void;
};

export const DeliveryOptions = ({ value, onChange }: Props) => {
  //TODO refactor any
  const handleDelivery = (_: any, newValue: DeliveryType | null) => {
    if (newValue) onChange(newValue);
  };
  return (
    <section aria-labelledby="delivery-title">
      <div id="delivery-title" className="mb-4 text-[16px] text-subtle">
        Tipo de Entrega:
      </div>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleDelivery}
        sx={{
          display: "grid",
          width: { xs: "100%", lg: "90%", xl: "71%" },
          gap: 2,
          gridTemplateColumns: "auto auto",
          "& .MuiToggleButton-root": {
            width: "100%",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: 0.5,
            alignItems: "center",
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "#eb00d3",
            textTransform: "none",
          },
          "& .MuiToggleButton-root.Mui-selected": {
            backgroundColor: "#4D525C1A",
          },
          "& .MuiToggleButton-root.Mui-selected .indicator": {
            backgroundColor: "#eb00d3",
            borderColor: "#eb00d3",
          },
        }}
      >
        <ToggleButton
          className="text-[14px]"
          value="home"
          aria-label="Despacho a domicilio"
        >
          <DeliveryIcon className="mb-[2px]" />
          <span>Despacho a domicilio</span>
          <span
            className="indicator w-[11px] h-[11px] rounded-[50%] border-[1px] border-foreground"
            aria-hidden
          />
        </ToggleButton>
        <ToggleButton
          className="text-[14px] justify-center items-center"
          value="store"
          aria-label="Retiro en tienda gratis"
        >
          <StoreIcon className="mb-[2px]" />
          <span>Retiro en tienda GRATIS</span>
          <span
            className="indicator w-[11px] h-[11px] rounded-[50%] border-[1px] border-foreground"
            aria-hidden
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </section>
  );
};
