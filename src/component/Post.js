import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionId, setQuestionInfo } from '../features/querySlice';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';
import db from '../firebase';
import Modal from 'react-modal';
import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons';
import '../css/Post.css';

const Post = ( { id, question, imageUrl, timestamp, section, JuUser } ) => {

    const [openModal,setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const questionId = useSelector(selectQuestionId);
    const [answer, setAnswer]=useState("");
    const user=useSelector(selectUser);
    const [getAnswer,setGetAnswer]=useState([]);
    useEffect(()=>{
        if(questionId){
            db.collection("questions").doc(questionId).collection('answer').orderBy('timestamp','desc')
            .onSnapshot(snapshot=>setGetAnswer(snapshot.docs.map((doc)=>({
                id:doc.id,
                answers:doc.data()
            }))))
        }
    })
    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("questions").doc(questionId).collection("answer").add({
            user: user,
            answer: answer,
            questionId: questionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
        setAnswer("");
        setOpenModal(false);
      };

    return (
        <div className="post" onClick={()=>dispatch(setQuestionInfo({
            questionId:id,
            questionName:question,
        }))}>
            <div className="post_info">
                <Avatar src={JuUser.photo}/>
                <div className='post__details'>
                    <h5>{JuUser.displayName?JuUser.displayName:JuUser.email}</h5>
                    <span>posted on</span>
                    <p>{section}</p>
                    <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
                </div>
            </div>
            <div className="post_body">
                <div className="question">
                    <p>{question}</p>
                    <button className="btnanswer" onClick={()=>setOpenModal(true)}>Answer</button>
                    <Modal isOpen={openModal}
                        onRequestClose={()=>setOpenModal(false)}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay:{
                                width:700,
                                height:440,
                                backgroundColor:"rgba(0,0,0,0.8)",
                                zIndex:"1000",
                                top:"50%",
                                left:"50%",
                                marginTop:"-300px",
                                marginLeft:"-350px"
                            }
                        }}>
                        <div className='modal__question'>
                            <h1>{question}</h1>
                            <p>asked by <span className='name'>{JuUser.displayName?JuUser.displayName:JuUser.email}</span>{""}
                             on <span className='name'> {new Date(timestamp?.toDate()).toLocaleString()}</span>
                            </p>
                        </div>
                        <div className='modal__answer'>
                            <textarea value={answer} placeholder='Enter Your Answer' 
                            type='text' 
                            onChange={(e)=>setAnswer(e.target.value)}
                            />
                        </div>
                        <div className='modal__button'>
                            <button className='cancel' onClick={()=>setOpenModal(false)}>
                                Cancel</button>
                            <button type='submit' className='add' onClick={handleAnswer}>
                                Add Answer
                            </button>
                        </div>     
                    </Modal>
                </div>
                <div className="answer">
                {getAnswer.map(({Id,answers})=>(
                    <p key={Id}  style={{position:"relative",paddingBottom:"5px"}}> {
                        id===answers.questionId?(
                            <span>
                                {answers.answer}
                                <br />
                                <span
                                style={{
                                    color:"gray",
                                    fontSize:"small",
                                    display:"flex",
                                    right:"0px"
                                }}>
                                    <span style={{color:"#3052c0"}}>
                                        {answers.user.displayName?answers.user.displayName:answers.user.email}{" "}
                                        on{" "}
                                        {new Date(answers.timestamp?.toDate()).toLocaleString()}
                                    </span>
                                </span>
                            </span>
                        ):(
                            ""
                        )
                    }
                </p>
            ))}
        </div>
        <img src={imageUrl} 
        alt="" />
               
            </div>
            <div className="footer">
                <div className="action">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOutlined />
                <ChatBubbleOutline />
                <div className="footer_left">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
};

export default Post;
