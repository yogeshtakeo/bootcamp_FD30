import React from "react";

export const Button = (props) => {
  const { primary, secondary, children, ...rest } = props;

  if (primary)
    return (
      // All the other data in the rest will be used as attribute
      <button {...rest} style={{ background: "blue" }}>
        {children}
      </button>
    );
  else if (secondary)
    return (
      // All the other data in the rest will be used as attribute
      <button {...rest} style={{ background: "green" }}>
        {children}
      </button>
    );
  else
    return (
      // All the other data in the rest will be used as attribute

      <button
        {...rest}
        style={{ background: "white", outline: "none", border: "none" }}
      >
        {children}
      </button>
    );
};
