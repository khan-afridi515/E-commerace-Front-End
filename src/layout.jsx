import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './heading/navbar';
import Foot from './footer/foot';

// const Layout = ({children}) => {
const Layout = ({children, found, lengthed, functt, producted, myUsers, setMyUsers, inpVall, setInpVall}) => {
    const location = useLocation();

    const hideLayout = location.pathname === "/profile";

  return (
    <div>
      {!hideLayout && <Navbar find={found} length={lengthed} funct={functt} product={producted} myUser={myUsers} setMyUser={setMyUsers} inpVal={inpVall} setInpVal={setInpVall}/>}
      {/* {!hideLayout && <Navbar/>} */}
      {children}
      {!hideLayout && <Foot/>}
    </div>
  )
}

export default Layout
