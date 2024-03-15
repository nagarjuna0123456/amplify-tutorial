import React from 'react';
import './sideMenu.css';
import {NavLink} from 'react-router-dom';

class SideMenu extends React.Component {
    constructor()
    {
        super();
        this.state = {};
    }


    render()
    {
        return (
            <div>
                <div className="side-menu-navigation">
                    <ul>
                        <nav>
                            <li>
                                <div className="icona">
                                    <span className="icon">
                                        <ion-icon name="logo-electron"></ion-icon>
                                    </span>
                                    <span className="title">TeamLease</span>
                                </div>
                            </li>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="home-outline"></ion-icon>
                                        </span>
                                        <span className="title">Home</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="albums-outline"></ion-icon>
                                        </span>
                                        <span className="title">File Upload</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="options-outline"></ion-icon>
                                        </span>
                                        <span className="title">PO/Contract</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="receipt-outline"></ion-icon>
                                        </span>
                                        <span className="title">Institutional</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="podium-outline"></ion-icon>
                                        </span>
                                        <span className="title">Add File</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="newspaper-outline"></ion-icon>
                                        </span>
                                        <span className="title">Add Contract</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="analytics-outline"></ion-icon>
                                        </span>
                                        <span className="title">Edit Contract</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="stats-chart-outline"></ion-icon>
                                        </span>
                                        <span className="title">Report</span>
                                    </div>
                                </li>
                            </NavLink>
                           
                            
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li> 
                                    <div>
                                        <span className="icon">
                                            <ion-icon name="settings-outline"></ion-icon>
                                        </span>
                                        <span className="title">Aggrement File Upload</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="alert-circle-outline"></ion-icon>
                                        </span>
                                        <span className="title">Help</span>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="alert-circle-outline"></ion-icon>
                                        </span>
                                        <span className="title">Help</span>
                                    </div>
                                </li>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#ffffff',
                                    background: '#ff0000',
                                  }
                                : { textDecoration: "none" }
                              }
                            >
                                <li>
                                    <div>
                                        <span className="icon">
                                        <ion-icon name="log-out-outline"></ion-icon>
                                        </span>
                                        <span className="title">Help</span>
                                    </div>
                                </li>
                            </NavLink>

                            
                        </nav>
                    </ul>
                </div>

                {/* <Helmet>
                    <script src='script.js' type="text/javascript" />
                </Helmet> */}
            </div>
        );
    }
}

export default SideMenu;