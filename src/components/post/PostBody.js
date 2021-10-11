import React from 'react';
import '../css/Post.css';
import PostQuery from './PostQuery';
import PostAnswer from './PostAnswer';

function PostBody( {Id, image, query, timestamp, juQueryUser, queryId, queryName} ) {
    return (
        <div className="post__body">
                <PostQuery
                    query={query}
                    timestamp={timestamp}
                    juQueryUser={juQueryUser}
                />
                <PostAnswer
                    Id={Id}
                    queryId={queryId}
                    queryName={queryName}
                />
                <img src= {image} alt={queryName} />
        </div>
    )
}

export default PostBody;
