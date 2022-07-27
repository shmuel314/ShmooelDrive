import React, { useState } from 'react'
import FilesUpload from './FilesUpload';
import Functions from './Functions';

function Files({path}) {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {
        console.log(name);
        const formData = new FormData();
        formData.append("name", path+name);
        formData.append("file", selectedFile);

        Functions.addFiles(formData)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value);console.log(name);}} />
                <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
                <FilesUpload
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                />
                <input type="submit" />
            </form>

        </div>
    )
}

export default Files