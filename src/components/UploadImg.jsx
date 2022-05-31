import React, { useState } from 'react'
import Dropzone from "react-dropzone";

import './UploadImg.css'

const UploadImg = () => {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
        setFileNames(acceptedFiles.map(file => file.name));
    return (
        <div className='container'>

            <div className='dragdrop'>
                <Dropzone
                    onDrop={handleDrop}
                    accept="image/*"
                    minSize={1024}
                    maxSize={3072000}

                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <p>Drag'n'drop images, or click to select files</p>
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default UploadImg