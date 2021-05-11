import React, { useEffect, useState } from 'react';
import '../css/Feed.css';
import db from '../firebase';
import Post from './Post';
import QueryBox from './QueryBox';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('queries')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=> ({
            id: doc.id,
            query: doc.data()
        }))))
    }, [])

    return (
        <div className="feed">
            <QueryBox />
            {
                posts.map(({id, query}) => (
                    <Post
                        key={id}
                        Id={id}
                        image={query.imageUrl}
                        query= {query.query}
                        timestamp = {query.timestamp}
                        juQueryUser = {query.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed;
