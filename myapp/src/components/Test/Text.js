import React from "react";
import { useState } from "react";
export default function Text() {
  const [data, setData] = useState("change me");
  const textchange = (e) => {
    setData(e.target.value);
    console.log(e.target.value);
  };
  const convertup = (e) => {
    const x = data.toUpperCase();
    setData(x);
  };

  return (
    <div>
      <from>
        <textarea value={data} onChange={textchange}>
          import React from "react";
        </textarea>
        <button type="submit" onClick={convertup}>
          convert tu upper
        </button>
      </from>
    </div>
  );
}
 