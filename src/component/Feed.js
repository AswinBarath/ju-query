import React from 'react';
import QueryBox from './QueryBox';
import Post from './Post';
import '../css/Feed.css';

function Feed( {posts} ) {

    return (
            <div className="feed">
                <QueryBox />
                {
                    posts.map(({qid, query}) => (
                        <Post
                            key = {qid}
                            qid = {qid}
                            image = {query.imageUrl}
                            section = {query.section}
                            query = {query.question}
                            timestamp = {query.timestamp}
                            juQueryUser = {query.user}
                        />
                    ))
                }
            </div>
    )
}

export default Feed;
