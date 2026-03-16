import { Button } from "@mui/material";

type Props = {
  onClick?: () => void;
};

export const AddToCartButton = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="large"
      className="bg-brand-primary text-[15px]"
      sx={{
        textTransform: "none",
        fontWeight: 700,
      }}
    >
      Agregar al carrito
    </Button>
  );
};
