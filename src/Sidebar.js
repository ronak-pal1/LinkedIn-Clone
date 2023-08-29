import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import sidebarBanner from "./assets/DevOps banner.png";

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={ sidebarBanner } alt="Banner" />
                <Avatar className="sidebar__avatar" />
                <h2>Ronak paul</h2>
                <h4>ronakpaulfaf@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("softwareengineering")}
                {recentItem("developer")}
                {recentItem("engineer")}
            </div>

        </div>
    );
}

export default Sidebar;