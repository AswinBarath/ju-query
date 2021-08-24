import React, { useEffect, useState } from 'react';
import '../css/Post.css';
import db from '../firebase';
import PostGetAnswer from './PostGetAnswer';

function PostAnswer( {Id, queryId, queryName} ) {
    const [getAnswer, setGetAnswer] = useState([]);
    useEffect(() => {
        if(queryId) {
            db.collection('queries')
                .doc(queryId)
                .collection('answer')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => 
                    setGetAnswer(
                        snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
                    )
                )
        }
    });
    return (
        <div className="post__answer">
                    {
                        getAnswer.map(({id, answers}) => {
                            <PostGetAnswer
                                Id={Id}
                                id={id}
                                answers={answers}
                             />
                        })
                    }
                </div>    
    )
}

export default PostAnswer;
