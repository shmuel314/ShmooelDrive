import React, { useState } from 'react'
import Folders from './Folders'
import Header from './Header'
import Main from './Main'
import globalContext from './Context'
import Popup from './Popup'
import "../App.css"
import NavBar from './NavBar'

function Layout() {
    const[path,setPath] = useState(["folders","root"]);
    const [selectFolder, setSelectFolder] = useState("")
    const[isShow,setIsShow]=useState(false)

  return (
    <div className='layout-container'>
        {/* <globalContext.Provider value = {{path,setPath,selectFolder, setSelectFolder,setIsShow}}> */}
        <Header/>
        {/* <Folders/> */}
        <NavBar/>
        <Main/>
       {/* { isShow?<Popup/>:<></>} */}
        {/* </globalContext.Provider> */}
    </div>
  )
}

export default Layout