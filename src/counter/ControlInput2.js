import React, { useState } from 'react'

function ControlInput2() {

    const [val, setVal] = useState("")
    const [arr, setArr] = useState([])

    const changeHandler = (e) => { 
        setVal(e.target.value)
    }

    const clickHandler = (e) => {
        setArr(prev => ([...prev, val]))
        setVal("")
    }

    console.log(arr)

  return (
    <div>
        <input value={val} onChange={changeHandler} />

        <button onClick={clickHandler}>Add Val</button>
    </div>
  )
}

export default ControlInput2;
