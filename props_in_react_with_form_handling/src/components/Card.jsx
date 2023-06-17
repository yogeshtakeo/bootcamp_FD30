import React from "react";

export const Card = (props) => {
  const { title, imageAddress, description, backgroundColor } = props;

  const object = {
    number: 1,
    string: "one",
    name: "jharana",
  };

  const { number, ...rest } = object;

  return (
    <div className="card " style={{ background: backgroundColor }}>
      <h1>{title}</h1>
      <img src={imageAddress} alt="Scene" height={"150px"} />
      <p>{description}</p>
      <button> See More </button>
    </div>
  );
};
