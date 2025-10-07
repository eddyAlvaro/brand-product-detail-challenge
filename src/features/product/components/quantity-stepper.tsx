type Props = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
};

const QuantityStepper = ({ value, onChange, min = 1 }: Props) => {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(value + 1);
  return (
    <div className="grid grid-cols-[auto_1fr_auto] w-full sm:w-auto gap-1 md:gap-3">
      <button
        className="w-[28px] h-[28px] bg-border rounded-[5px] cursor-pointer"
        onClick={dec}
        aria-label="Disminuir cantidad"
        disabled={value <= min}
      >
        -
      </button>

      <div
        role="status"
        aria-live="polite"
        className="w-full select-none rounded-[5PX] bg-border/19 text-zinc-900 text-center"
      >
        {value}
      </div>

      <button
        className="w-[28px] h-[28px] bg-border rounded-[5px] cursor-pointer"
        onClick={inc}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;
