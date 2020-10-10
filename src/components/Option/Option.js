import React, { useState } from "react";
import { getOptionContainerStyle } from "./styles";
import PropTypes from "prop-types";

export default function Option({ option, isSelected, onSelect }) {
  const [isFocused, setIsFocused] = useState(false);

  const optionContainerStyle = getOptionContainerStyle({
    ...option,
    isFocused,
    isSelected,
  });

  const onMouseEvents = {
    onMouseLeave: () => !option.isDisabled && setIsFocused(false),
    onMouseEnter: () => !option.isDisabled && setIsFocused(true),
    onClick: () =>
      !option.isDisabled &&
      !isSelected &&
      onSelect({ value: option.value, label: option.label }),
  };

  return (
    <>
      <div
        key={option.value}
        className={optionContainerStyle.className}
        {...onMouseEvents}
      >
        {option.label}
      </div>
      {optionContainerStyle.styles}
    </>
  );
}

Option.protoType = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

Option.defaultProps = {
  onSelect: () => console.warn('"onSelect" not implemented.'),
};
