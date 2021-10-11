import React, { useState, useEffect } from 'react';
import QueryBox from '../querybox/QueryBox';
import Post from './Post';
import db from '../../firebase';
import './Feed.css';

function Feed() {

    const [posts,setPosts] = useState([])
    useEffect(()=> {
        db.collection('questions').orderBy('timestamp','desc').onSnapshot
        (snapshot => setPosts(
            snapshot.docs.map((doc) => (({ 
                id:doc.id,
                question:doc.data(),
            })))));
    },[])
    return (
        <div className="feed">
            <QueryBox />
            {
                posts.map(({id,question})=> (
                    <Post key={id} 
                    id={id} 
                    imageUrl={question.imageUrl} 
                    question={question.question}
                    timestamp = {question.timestamp}
                    JuUser = {question.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed

