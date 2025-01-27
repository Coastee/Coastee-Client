import type { DropdownOptionTypes } from "@/constants/dropdown";
import type React from "react";
import * as s from "./Dropdown.styles";

interface DropdownProps {
  options: DropdownOptionTypes[];
  setItem: (item: DropdownOptionTypes) => void;
  dropDownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  backgroundColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  setItem,
  dropDownOpen,
  setDropdownOpen,
  backgroundColor,
}) => {
  const handleItemClick = (item: DropdownOptionTypes) => {
    setItem(item);
    setDropdownOpen(false);
  };

  return (
    <div
      css={s.containerStyle}
      style={{
        backgroundColor,
        display: dropDownOpen ? "flex" : "none",
      }}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          css={s.listBarStyle}
          onClick={() => handleItemClick(option)}
          tabIndex={0}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
