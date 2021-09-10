import React from 'react';
import '../css/Feed.css';
import Post from './Post';
import QueryBox from './QueryBox';

function Feed({posts}) {

    return (
            <div className="feed">
                <QueryBox />
                {
                    posts.map(({id, query}) => (
                        <Post
                            key={id}
                            Id={id}
                            image={query.imageUrl}
                            section={query.section}
                            query= {query.question}
                            timestamp = {query.timestamp}
                            juQueryUser = {query.user}
                        />
                    ))
                }
            </div>
    )
}

export default Feed;
