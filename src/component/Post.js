import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons';
import '../css/Post.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryId, selectQueryName, setQueryInfo } from '../features/querySlice';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';

Modal.setAppElement("#root");

function Post( {Id, image, query, timestamp, juQueryUser} ) {
    
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();

    const queryId = useSelector(selectQueryId);
    const queryName = useSelector(selectQueryName);
    const [answer, setAnswer] = useState("");
    const [getAnswer, setGetAnswer] = useState([]);

    useEffect(() => {
        if(queryId) {
            db.collection('queries')
                .doc(queryId)
                .collection('answer')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => setGetAnswer(snapshot.docs.map((doc) => ({
                id: doc.id,
                answers: doc.data()
            }))))
        }
    })

    const handleAnswer = (e) => {
        e.preventDefault();

        if(queryId) {
            db.collection('queries').doc(queryId).collection('answer').add({
                queryId: queryId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                answer: answer,
                user: user
            })

            console.log(queryId, queryName);
            setAnswer("");
            setOpenModal(false);
        }
    }

    return (
        <div className="post"
            onClick = {() => dispatch(setQueryInfo({
                queryId: Id,
                queryName: query
            }))}
        >
            <div className="post__info">
                <Avatar 
                    src={juQueryUser.photo}
                />
                <h5>{juQueryUser.display ? juQueryUser.display : juQueryUser.email }</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString}</small>
            </div>
            <div className="post__body">
                <div className="post__query">
                    <p>{query}</p>
                    <button onClick= {() => setOpenModal(true)} className="post__btnAnswer">Answer</button>
                    <Modal
                        isOpen={openModal}
                        onRequestClose={() => setOpenModal(false)}
                        shouldCloseOnOverlayClick = {false}
                        style= {{
                        overlay: {
                            width: 700,
                            height: 600,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: "1000",
                            top: "50%",
                            left: "50%",
                            marginTop: "-300px",
                            marginLeft: "-350px",
                        }
                        }}
                    >
                        <div className="modal__query">
                            <h1>{query}</h1>
                            <p>
                                asked by 
                                    <span className="name">
                                        { juQueryUser.display ? juQueryUser.display : juQueryUser.email }
                                    </span> {""}
                                    on <span className="name">
                                        { new Date(timestamp?.toDate()).toLocaleString() }
                                    </span>
                            </p>
                        </div>
                        <div className="modal__answer">
                            <textarea 
                                required
                                value = {answer}
                                onChange = {(e) => setAnswer(e.target.value)}
                                placeholder="Enter your answer" 
                                type="text"
                             />
                        </div>
                        <div className="modal__buttons">
                            <button className="close" onClick={() => setOpenModal(false)}>Close</button>
                            <button onClick={handleAnswer} type = "submit" className="add">Add Answer</button>
                        </div>
                    </Modal>
        
                </div>
                <div className="post__answer">
                    {
                        getAnswer.map(({id, answers}) => {
                            <p
                                key={id}
                                style = {{position: "relative", paddingBottom: "5px"}}>
                                {
                                    id === answers.queryId ? (
                                    <span>
                                        {answers.answer}
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
                <img src= {image} alt="Picture" />
            </div>
            <div className="post__footer">
                <div className="post__foterAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;
