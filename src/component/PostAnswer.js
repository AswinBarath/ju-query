import React, { useEffect, useState } from 'react';
import '../css/Post.css';
import db from '../firebase';

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
    }, [queryId]);
    return (
        <div className="post__answer">
                    {
                        getAnswer.map(({id, answers}) => {
                            {console.log("answers.answer=", answers.answer)}
                            {console.log("Id=", Id, "and queryId=", answers.queryId)}
                            {console.log("Id === answers.queryId ", Id === answers.queryId)}
                        
                            <p key={id} style = {{position: "relative", paddingBottom: "5px"}}>
                                {
                                    Id === answers.queryId ? (
                                    <span>
                                        <div>Answer: {answers.answer}</div>
                                        {console.log("answers.answer", answers.answer)}
                                        <br />
                                        <span
                                            style = {{
                                                position: "absolute",
                                                color: "gray",
                                                fontSize: "small",
                                                display: "flex",
                                                right: "0px"
                                            }}
                                        >
                                            <span style = {{ color: "royalblue" }}>
                                                { answers.user.display
                                                    ? answers.user.display
                                                    : answers.user.email}{" "} 
                                                on{" "}
                                                {new Date(answers.timestamp?.toDate()).toLocaleString()}
                                            </span>
                                        </span>
                                    </span>
                                    ) : (
                                        ""
                                )}
                            </p>
                        })
                    }
                </div>    
    )
}

export default PostAnswer;
