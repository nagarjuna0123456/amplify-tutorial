import React from 'react';
import SideMenu from '../side-menu/sideMenu';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';
import './main.css';
import Footer from '../footer';
class Main extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    toggleChange = () => {
        // add hovered class to selected list item
        let list = document.querySelectorAll(".side-menu-navigation li");

        function activeLink() {
            list.forEach((item) => {
                item.classList.remove("hovered");
            });
            this.classList.add("hovered");
        }

        list.forEach((item) => item.addEventListener("mouseover", activeLink));

        // Menu Toggle
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".side-menu-navigation");
        let main = document.querySelector(".main");

        toggle.onclick = function () {
            navigation.classList.toggle("active");
            main.classList.toggle("active");
        };
    }

    

    componentDidMount() {
        this.toggleChange();
        // this.changeIconName();
    }

    render() {
        return (
            <>
            <div className="side-menu-container">
                <SideMenu />
                <div className="main">
                    <Header />
                    <Outlet>    
                    </Outlet>
                    <Footer />
                </div>
                
            </div>
            
            </>
        );
    }
}

export default Main;