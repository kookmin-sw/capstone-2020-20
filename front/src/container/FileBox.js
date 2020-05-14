import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import FileContent from "../components/FileContent";

const FileBox = () => {

    return (
        <Fragment>
            <Header isLogged={true}></Header>
            
            <FileContent></FileContent>
        </Fragment>
    )

}



export default FileBox;