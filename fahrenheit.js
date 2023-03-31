import React from "react";
export default function fahrenheit({ derece }) {
  let x = derece;
  x = (x*1.8) +32
  return (
    <div>
      <p>
        Fahrenheit: {x}
      </p>
    </div>
  );
}

