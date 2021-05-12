import React from 'react';
import '../css/Post.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryId, selectQueryName, setQueryInfo } from '../features/querySlice';
import PostInfo from './PostInfo';
import PostBody from './PostBody';
import PostFooter from './PostFooter';


function Post( {Id, image, query, timestamp, juQueryUser} ) {
    const dispatch = useDispatch();
    const queryId = useSelector(selectQueryId);
    const queryName = useSelector(selectQueryName);

    return (
        <div className="post"
        onClick = {() => dispatch(setQueryInfo({
            queryId: Id,
            queryName: query
        }))}
        >
            <PostInfo
                timestamp={timestamp}
                juQueryUser={juQueryUser}
            />
            <PostBody
                    Id={Id}
                    image={image}
                    query={query}
                    timestamp={timestamp}
                    juQueryUser={juQueryUser}
                    queryId={queryId}
                    queryName={queryName}
            />
            <PostFooter />
        </div>
    )
}

export default Post;
