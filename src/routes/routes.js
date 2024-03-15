import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../components/main/main';
import SideMenu from '../components/side-menu/sideMenu';

import Header from '../components/header/header';
import Dashboard from '../components/dashboard/dashboard_main';
import FileUpload from '../components/FileUpload/file_upload';


class Routing extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        
                        <Route path="/SideMenu" element = {<SideMenu />} />
                        <Route path="/Header" element = {<Header />} />
                        <Route path="/" element = {<Main />}>
                            <Route path="/dashboard" element = {<Dashboard />} />
                            <Route path="/fileupload" element = {<FileUpload />} />

                        </Route>
                       
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routing;