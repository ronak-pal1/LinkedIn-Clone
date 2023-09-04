import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

const Post = ({name, description, message, photoUrl, firstChar}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
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
                <InputOption Icon={ChatOutlined} title="Comment" color="grey"/>
                <InputOption Icon={ShareOutlined} title="Share" color="grey"/>
                <InputOption Icon={SendOutlined} title="Repost" color="grey"/>
            </div>
        </div>
    );
}

export default Post;