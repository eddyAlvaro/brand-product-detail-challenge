import React from "react";

type Props = {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3";
  className?: string;
  underlineWidthClass?: string;
  underlineColorClass?: string;
};

export const SectionTitle = ({
  children,
  align = "left",
  as = "h2",
  className = "",
  underlineWidthClass = "w-full",
  underlineColorClass = "bg-brand-primary",
}: Props) => {
  const Tag = as;
  const alignWrap =
    align === "center" ? "items-center" : align === "right" ? "items-end" : "items-start";

  return (
    <div className={`flex flex-col w-fit ${alignWrap}`}>
      <Tag
        className={["font-extrabold text-[16px] text-foreground leading-tight", className].join(
          " ",
        )}
      >
        {children}
      </Tag>
      <span
        aria-hidden
        className={[underlineWidthClass, underlineColorClass, "h-[2px] rounded-full mb-3"].join(
          " ",
        )}
      />
    </div>
  );
};
