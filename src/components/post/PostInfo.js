import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Post.css';

function PostInfo( {timestamp, juQueryUser} ) {
    return (
        <div className="post__info">
                <Avatar 
                    src={juQueryUser.photo}
                />
                <h5>{juQueryUser.display ? juQueryUser.display : juQueryUser.email }</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default PostInfo;
