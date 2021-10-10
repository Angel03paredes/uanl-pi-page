import React from 'react'
import PDF from './../Manual de Usuario.pdf'
const Manual = ()=>{
    return (
        <embed className="embed" src={PDF}>
        </embed>
    )
};

export default Manual;