import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectQueryId, selectQueryName } from '../features/querySlice';
import '../css/Post.css';
import Modal from 'react-modal';
import firebase from 'firebase';
import db from '../../firebase';

Modal.setAppElement("#root");

function PostQuery( {query, timestamp, juQueryUser} ) {
    const user = useSelector(selectUser);
    const [answer, setAnswer] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const queryId = useSelector(selectQueryId);
    const queryName = useSelector(selectQueryName);
    const handleAnswer = (e) => {
        e.preventDefault();
    
        if(queryId) {
            db.collection('queries')
                .doc(queryId).collection('answer')
                .add({
                    user: user,
                    answer: answer,
                    queryId: queryId,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            setAnswer("");
            setOpenModal(false);
        }
    }
    return (
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
                
    )
}

export default PostQuery;
