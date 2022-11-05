import React, { useState } from "react";


function ControlInput() {
  const [state, setState] = useState("");

  function changeHandler(e) {
    setState(e.target.value);
  }

  console.log(state);

  return (
    <div>
      <input value={state} onChange={changeHandler} />
    </div>
  );
}

export default ControlInput;
