import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import linkedInIcon from "./assets/icons8-linkedin-240.png";
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, ChatRounded, Notifications } from "@material-ui/icons";

const Header = () => {
    return (
        <div className="header">
            <div class="header__left">
                <img src={ linkedInIcon } alt="linkedin icon" />
                
                <div class="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div class="header__right">
                <HeaderOption Icon= { HomeIcon } title='Home' />
                <HeaderOption Icon= { SupervisorAccountIcon } title='My Network' />
                <HeaderOption Icon= { BusinessCenter } title='Jobs' />
                <HeaderOption Icon= { ChatRounded } title='Messaging' />
                <HeaderOption Icon= { Notifications } title='Notifications' />

                <HeaderOption avatar={ linkedInIcon } title="Me" />
            </div>

        </div>
    );
}

export default Header;