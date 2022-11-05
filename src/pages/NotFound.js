import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()

    const clickHandler = (e) => {
        navigate("/")
    }

  return (
    <div>
        <h1>You Are Lost</h1>
        <button onClick={clickHandler} >Go Home</button>
    </div>
  )
}

export default NotFound