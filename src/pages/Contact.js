import React from 'react'
import {useParams} from "react-router-dom"

function Contact() {
    const {id} = useParams()
  return (
    <div>Contact</div>
  )
}

export default Contact