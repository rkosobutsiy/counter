import React, { useState } from "react";
import { oneOf } from "prop-types";
import classNames from "classnames";

import "./Tooltip.scss";

export const Tooltip = ({
  content,
  style,
  children,
  position = oneOf(["top", "right", "bottom", "left"]),
}) => {
  const [visible, setVisibility] = useState(false);

  const show = () => {
    setVisibility(true);
  };
  const hide = () => {
    setVisibility(false);
  };
  const classes = classNames("tooltip", position);

  return (
    <span className="tooltipWrapper">
      {visible && (
        <span style={style} className={classes}>
          {content}
        </span>
      )}
      <span className="targetElement" onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
    </span>
  );
};
