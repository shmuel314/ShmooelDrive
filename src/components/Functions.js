import React from 'react';
import Folders from './Folders';
const axios =require("axios");


function getFolders(folderName,setState) {//read folder
  axios.get(`http://localhost:5500/root/folders/?folderName=${folderName}`)
  .then((res)=>{
    setState(res.data)
    console.log(res.data);
  })
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

function addFiles(path,formData){
  axios.post(`http://localhost:5500/root/files/?path=${path}`,formData)
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>console.log(err))
}

function delFile(path){
  axios.delete(`http://localhost:5500/root/files/?path=${path}`)
  .then((res)=>{
    console.log(res.data);
  })
}
export default {getFolders,addFolders,delFolders,renameFolder,addFiles,delFile}