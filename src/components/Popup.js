import React, { useEffect, useRef } from 'react'
import "./Popup.css";
import Functions from './Functions';
const axios = require("axios");

function Popup({ setShowPop, showPop, deleteFolder,path,propsForDel }) {

    useEffect(() => { folderName.current.focus() }, [showPop]);

    const folderName = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        Functions.addFolders(path, folderName.current.value);
        setShowPop(false)
    }
     if(showPop==="Remove folder"){
        console.log(showPop);

    return (
        <div className='pop-box'>fggx
            <div className='box'>
                <p> ?אתה בטוח שאתה רוצה למחוק</p>
                <button onClick={()=>{deleteFolder(propsForDel);setShowPop(false);console.log(propsForDel);}}>כן</button>
                <button onClick={() => setShowPop(false)}>לא</button>
            </div>
        </div>
    )
    }
        else{
            console.log(showPop);
            return (
                <div className='pop-box'>
                <div className='box'>
                    <button onClick={() => setShowPop(false)}>x</button>
                    <form onSubmit={handleSubmit}>
                        <input ref={folderName} type="text" />
                        <input type="submit" value="הוסף" />
                    </form>
                </div>
            </div>
        )
    }

}

export default Popup