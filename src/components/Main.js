
import React, { useEffect, useState } from 'react';
import "./Main.css";
import Popup from './Popup';
import Functions from "./Functions";
import Folders from './Folders';
import Files from './Files';
import UploadFiles from './UploadFiles'

function Main() {
    const [selectFolder, setSelectFolder] = useState({});
    const [path, setPath] = useState("root/");
    const [cross, setCross] = useState()
    const [showPop, setShowPop] = useState();
    console.log(path);

    // const inputChangeNameFolder = useRef()

    useEffect(() => { (Functions.getFolders(path, setSelectFolder));console.log("beginnnn");; setCross(path.split("/").slice(0, path.split("/").length - 1)) }, [path, showPop]);
   
    return (
        <div className='main-container'>
            <div className='main-inner-width'>
                <div>
                    {cross?.map((back, i) => <button onClick={() => {
                        if (back === "root") {
                            setPath("root/")
                        }
                        else if (back !== cross[cross.length - 1]) {
                            setPath(path.split("/" + back + "/")[0] + "/" + back + "/");
                        }

                    }
                    }
                        className='btnBack'>{back}</button>)}
                </div>
                <div className='main-folders-files-container'>
                    <div  className='main-onlyFolders-container'>
                        {Object.keys(selectFolder)!=0?selectFolder.foldersList.map(folder => {
                            return (
                                <Folders path={path} setPath={setPath} folder={folder} showPop={showPop} setShowPop={setShowPop} setSelectFolder={setSelectFolder} />
                            )
                        }):null}
                    </div>
                    <div className='main-onlyFiles-container'>
                        {Object.keys(selectFolder)!=0?selectFolder.fileList.map(file => {
                            return (

                                <Files path={path} setPath={setPath} file={file} showPop={showPop} setShowPop={setShowPop} setSelectFolder={setSelectFolder} />
                            )
                        }):null}
                    </div>
                </div>
                <div className='add-folder' onClick={() => { setShowPop("Add folder") }}>הוסף תיקיה</div>
                <UploadFiles showPop={showPop} setShowPop={setShowPop}  path={path} setSelectFolder={setSelectFolder} />

                {showPop === "Add folder" ? <Popup path={path} setShowPop={setShowPop} showPop={showPop} /> : <></>}
            </div>
        </div>
    )
}

export default Main