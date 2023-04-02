import React from "react";
export default function kelvin({ derece }) {
  let x = derece;
  x = x + 273.15
  return (
    <div>
      <p>
        Kelvin: {x}
      </p>
    </div>
  );
}
