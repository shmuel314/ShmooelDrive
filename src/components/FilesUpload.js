import React, { useRef } from 'react'

function FilesUpload({onFileSelect,}) {
    const fileInput = useRef()
    const handleFileInput = (e) => {
        onFileSelect(e.target.files[0])
    }
  return (
    <div>
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
        </div>
    </div>
  )
}

export default FilesUpload