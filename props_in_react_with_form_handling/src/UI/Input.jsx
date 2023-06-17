import React from "react";

export const Input = (props) => {
  // sreding the props will get everything from the props to be used asn an attribute in input
  return <input {...props} />;
};

// export function Input(props) {
//   return <input {...props} />;
// }
