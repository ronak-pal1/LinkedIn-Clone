import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import linkedInIcon from "./assets/icons8-linkedin-240.png";
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, ChatRounded, Notifications } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./fire";

const Header = () => {

    const dispatch = useDispatch();

    const logoutOfApp = (e) => {
        e.preventDefault();

        dispatch(logout());
        auth.signOut();
    }


    return (
        <div className="header">
            <div className="header__left">
                <img src={ linkedInIcon } alt="linkedin icon" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon= { HomeIcon } title='Home' />
                <HeaderOption Icon= { SupervisorAccountIcon } title='My Network' />
                <HeaderOption Icon= { BusinessCenter } title='Jobs' />
                <HeaderOption Icon= { ChatRounded } title='Messaging' />
                <HeaderOption Icon= { Notifications } title='Notifications' />

                <HeaderOption avatar={true} onClick={logoutOfApp} avatar={ linkedInIcon } title="Me" />
            </div>

        </div>
    );
}

export default Header;