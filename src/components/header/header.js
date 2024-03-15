import React from "react";
import './header.css';
import userImage from '../../assets/images/userImage.jpg';

class Header extends React.Component
{
    render()
    {
        return (
            <div>
                <div className="topbar">
                    <div className="toggle">
                        <ion-icon name="menu-outline" style={{color : "#0A2352"}}></ion-icon>
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    <div className="iconbox"></div>

                    <div className="toggle">
                        <ion-icon name="notifications-outline" style={{color : "#ffffff"}}></ion-icon>
                    </div>
                    <div className="toggle">
                        <ion-icon name="mail-outline" style={{color : "#ffffff"}}></ion-icon>
                    </div>
                    <div className="user">
                        <img src={userImage} alt="User" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;