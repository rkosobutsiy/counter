import "./Button.scss";
import block from "bem-cn";
import PropTypes from "prop-types";

const b = block("Button");

export const Button = ({
  style,
  children,
  onClick = {},
  className = "",
  type = PropTypes,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${b({ [type]: true })} ${className}`.trim()}
      disabled={disabled}
      style={style}
    >
      <span>{children}</span>
    </button>
  );
};
