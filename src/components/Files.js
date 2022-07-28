import React, { useEffect, useRef, useState } from 'react'
import Functions from './Functions';
import { RiDeleteBin2Fill } from "react-icons/ri"
import "./Main.css"
import Popup from './Popup';

function Files({ path, setPath, file,setShowPop,showPop,setSelectFolder}) {
    const [changeName, setChangeName] = useState(false);//show input of change name
    const inputChangeNameFolder = useRef();//auto focus on input of change name
    // const [currentNameFolder,setCurrentNameFolder]=useState(`${path}${file}`)
    // const [nameFolder,setnameFolder]=useState(file.split(".")[0])
    // const [extNameFolder,setextNameFolder]=useState(file.split(".")[1])
    // console.log(nameFolder);
    // console.log(extNameFolder);
    // const [propsForDel,setPropsForDel]=useState("qwe")
    useEffect(()=>{inputChangeNameFolder.current?.focus()},[changeName])//auto focus on input of change name
    const changeToinput = (e) => {
        setChangeName(true)
        e.stopPropagation();
    }

    const deleteFile = (fileName) => {
        Functions.delFile(fileName);
        setShowPop(!showPop)
    }

    // const onblur = () =>{
    //     setChangeName(false);
    //     Functions.renameFolder(currentNameFolder,path+nameFolder+"."+extNameFolder)
    //     console.log("🚀 ~ file: Files.js ~ line 31 ~ onblur ~ currentNameFolder", currentNameFolder)
    //     Functions.getFolders(path,setSelectFolder)
    //     setCurrentNameFolder(path+nameFolder);
    //     // setnameFolder(file)
    //     setShowPop(false)
    // }

     const onblur = () =>{
        console.log(file);
        setChangeName(false);
        // Functions.renameFolder(file,)
     }

    return (
        <div >
            <div className="folder"  >
                <div id={path + file} onClick={()=>deleteFile(path+file)}><RiDeleteBin2Fill /></div>
                {!changeName ? <p onClick={changeToinput}>{file}</p> : <input  ref={inputChangeNameFolder}  type="text" onBlur={onblur}/>
                // <input defaultValue={file} onChange={(e)=>{(e.target.value.lastIndexOf(".")!=-1)? setnewNameFolder(e.target.value+file.slice(file.lastIndexOf("."))):setnewNameFolder(e.target.value);console.log(newNameFolder);}}
                // ref={inputChangeNameFolder} 
                // type="text" onBlur={onblur}/>}
                //   <input value={`${nameFolder}`} onChange={(e)=>setnameFolder(e.target.value)}
                // ref={inputChangeNameFolder} 
                // type="text" onBlur={onblur}/>
            }
            </div>
           {/* {showPop==="Remove folder"? <Popup deleteFolder={deleteFolder} showPop={showPop} setShowPop={setShowPop} propsForDel={propsForDel}/>:null} */}

        </div>
    )
}

export default Files