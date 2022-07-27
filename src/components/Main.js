
import React, {useEffect, useState } from 'react';
import "./Main.css";
import Popup from './Popup';
import Functions from "./Functions";
import Folders from './Folders';
import Files from './Files';

function Main() {
    const [selectFolder, setSelectFolder] = useState([]);
    const [path, setPath] = useState("root/");
    const [cross, setCross] = useState()
    const [showPop, setShowPop] = useState();
   
    // const inputChangeNameFolder = useRef()

    useEffect(() => { (Functions.getFolders(path, setSelectFolder));setCross(path.split("/").slice(0,path.split("/").length-1))}, [path, showPop]);
   
    return (
        <div className='main-container'>
            <div className='main-inner-width'>
                <div>
                   {console.log(path)}
                   {console.log(cross)}
                    {cross?.map((back,i)=><button onClick={()=>{
                        if (back==="root"){
                            setPath("root/")
                        }
                       else if (back!==cross[cross.length-1]){
                            setPath(path.split("/"+back+"/")[0]+"/"+back+"/");
                            } 
                       
                        }
                    }className='btnBack'>{back}</button>)}
                </div>
                <div className='main-folders-container'>
                    {selectFolder.map(folder => <Folders path={path} setPath={setPath} folder={folder} showPop={showPop} setShowPop={setShowPop} setSelectFolder={setSelectFolder}/>  
                        )}
                </div>
                <div className='add-folder' onClick={() => { setShowPop("Add folder") }}>הוסף תיקיה</div>
               <Files path={path}/>

                {showPop==="Add folder" ? <Popup  path={path} setShowPop={setShowPop} showPop={showPop} /> : <></>}
            </div>
        </div>
    )
}

export default Main