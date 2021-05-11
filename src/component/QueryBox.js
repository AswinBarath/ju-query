import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import '../css/QueryBox.css';
import { selectUser } from '../features/userSlice';

function QueryBox() {
    const user = useSelector(selectUser);
    return (
        <div className="queryBox">
            <div className="queryBox__info">
                <Avatar 
                    src={user.photo}
                />
                <h5>{user.displayName}</h5>
            </div>
            <div className = "queryBox__query">
                <p>What is your query or link?</p>
            </div>
        </div>
    )
}

export default QueryBox;
