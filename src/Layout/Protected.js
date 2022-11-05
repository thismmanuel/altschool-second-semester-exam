import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import {AuthContext} from './index'


function Protected() {
    const [isloggedIn] = useContext(AuthContext);

    if(isloggedIn === false){
        return <Navigate replace to="/" />
    }

  return (
    <Outlet />
  )
}

export default Protected