import { Avatar } from '@material-ui/core';
import React from 'react';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons';
import '../css/Post.css';

function Post( {id, query, image, timestamp, juQueryUser} ) {
    return (
        <div className="post">
            <div className="post__info">
                <Avatar 
                    src={juQueryUser.photo}
                />
                <h5>{juQueryUser.displayName ? juQueryUser.displayName : juQueryUser.email }</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString}</small>
            </div>
            <div className="post__body">
                <div className="post__query">
                    <p>{query}</p>
                    <button className="post__btnAnswer">Answer</button>
                </div>
                <div className="post__answer">
                    <p>Answer</p>
                </div>
                <img src= {image} alt="Picture" />
            </div>
            <div className="post__footer">
                <div className="post__foterAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;
