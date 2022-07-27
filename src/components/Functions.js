import React from 'react';
import Folders from './Folders';
const axios =require("axios");


function getFolders(folderName,setState) {//read folder
  axios.get(`http://localhost:5500/root/folders/?folderName=${folderName}`)
  .then((res)=>{
    setState(res.data)
    // console.log(res.data);
    // return res.data
  })
//   .catch(error)
//   console.log(error,"error of getFolders function");
}

function addFolders(path,newFolder){
    axios.post(`http://localhost:5500/root/folders/`,{folderName:`${path}/${newFolder}`})//add folder
    .then((res)=>{
        console.log(res.data);
    })
}

function delFolders(path){
    axios.delete(`http://localhost:5500/root/folders/?folderName=${path}`)//delete folder
    .then((res)=>{
      console.log(res.data);
    })
}

function renameFolder(currentName,newName){
  console.log("here");
  axios.put('http://localhost:5500/root/folders/',{currentName:currentName,newName:newName})
  .then((res)=>{
    console.log("here2");
    console.log(res.data);
  })
}

function addFiles(formData){
  axios.post('http://localhost:5500/root/files/',{path:formData.name,content:formData.file})
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>console.log(err))
}
export default {getFolders,addFolders,delFolders,renameFolder,addFiles}