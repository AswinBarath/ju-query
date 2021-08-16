import React from 'react';
import '../css/Post.css';

function PostGetAnswer( {Id, id, answers} ) {
    return (
        <div className="post__get__answers">
                <p key={Id} style = {{position: "relative", paddingBottom: "5px"}}>
                                {
                                    // Id === answers.queryId ? (
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
                                    // ) : (
                                    //     ""
                                // )}
                                }
                            </p>
        </div>
    )
}

export default PostGetAnswer;
