import React, { useEffect, useRef, useState } from 'react'
import Functions from './Functions';
import { RiDeleteBin2Fill } from "react-icons/ri"
import "./Main.css"
import Popup from './Popup';

function Folders({ path, setPath, folder,setShowPop,showPop,setSelectFolder}) {
    const [changeName, setChangeName] = useState();//show input of change name
    const inputChangeNameFolder = useRef();//auto focus on input of change name
    const [currentNameFolder,setCurrentNameFolder]=useState(`${path}${folder}`)
    const [newNameFolder,setnewNameFolder]=useState()
    // const [propsForDel,setPropsForDel]=useState("qwe")
    useEffect(()=>{inputChangeNameFolder.current?.focus()},[changeName])//auto focus on input of change name

    const changeToinput = (e) => {
        setChangeName(true)
        e.stopPropagation();
    }

    const deleteFolder = (folderName) => {
        Functions.delFolders(folderName);
        setShowPop(!showPop)
    }

    const onblur = () =>{
        setChangeName(false);
        Functions.renameFolder(currentNameFolder,path+newNameFolder)
        Functions.getFolders(path,setSelectFolder)
        setCurrentNameFolder(path+newNameFolder)
    }

    return (
        <div >
            <div className="folder" onDoubleClick={() => { if (!changeName) {setPath(path + folder + "/")    }}} >
                <div id={path + folder} onClick={()=>deleteFolder(path+folder)}><RiDeleteBin2Fill /></div>
                {!changeName ? <p onClick={changeToinput}>{folder}</p> : <input defaultValue={folder} onChange={(e)=>{setnewNameFolder(e.target.value);console.log(newNameFolder);}} ref={inputChangeNameFolder} type="text" onBlur={onblur}/>}
            </div>
           {/* {showPop==="Remove folder"? <Popup deleteFolder={deleteFolder} showPop={showPop} setShowPop={setShowPop} propsForDel={propsForDel}/>:null} */}

        </div>
    )
}

export default Folders