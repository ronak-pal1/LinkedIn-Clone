import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

const Post = ({name, description, message, photoUrl}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                {message}
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey"/>
                <InputOption Icon={ChatOutlined} title="Like" color="grey"/>
                <InputOption Icon={ShareOutlined} title="Like" color="grey"/>
                <InputOption Icon={SendOutlined} title="Like" color="grey"/>
            </div>
        </div>
    );
}

export default Post;