import React, { createContext,useState,useMemo,useCallback } from "react";
import { Outlet } from "react-router-dom";

export const AuthContext = createContext(null);

function Layout() {
    const [isloggedIn, setIsloggedin] = useState(false);
    const userInfo = useMemo(() => isloggedIn, []);
    const toggleUser = () => setIsloggedin(prev => !prev);
    const  meToggle = useCallback(
      () => {
        toggleUser()
      },
      [],
    )

    console.log(isloggedIn)
    
  return (
    <AuthContext.Provider value={[userInfo, meToggle]}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default Layout;
