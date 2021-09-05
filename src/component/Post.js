import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import '../css/Post.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryId, setQueryInfo } from '../features/querySlice';
import db from '../firebase';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';

const Post=({Id,query,image,timestamp,section,juQueryUser})=> {
    const [openModal,setOpenModal]=useState(false);
    const dispatch=useDispatch();
    const questionId=useSelector(selectQueryId);
    const [answer, setAnswer]=useState("");
    const user=useSelector(selectUser);
    const [getAnswer,setGetAnswer]=useState([]);
    useEffect(()=>{
        if(questionId){
            db.collection("queries").doc(questionId).collection('answer').orderBy('timestamp','desc')
            .onSnapshot(snapshot=>setGetAnswer(snapshot.docs.map((doc)=>({
                id:doc.id,
                answers:doc.data()
            }))))
        }
    })
    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("queries").doc(questionId).collection("answer").add({
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
        <div className='post'
        onClick={()=>dispatch(setQueryInfo({
            questionId:Id,
            questionName:query
        }))}>
            <div className='post__info'>
                <Avatar
                src={juQueryUser.photo}
                />
                <div className='post__details'>
                    <h5>{juQueryUser.display?juQueryUser.display:juQueryUser.email}</h5>
                    <span>posted on</span>
                    <p>{section}</p>
                    <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
                </div>
            </div>
            <div className='post__body'>
                <div className='post__question'>
                    <p>{query}</p>
                    <button className='post__btnAnswer' onClick={()=>setOpenModal(true)}>
                        Answer
                    </button>
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
                            <h1>{query}</h1>
                            <p>asked by <span className='name'>{juQueryUser.display?juQueryUser.display:juQueryUser.email}</span>{""}
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
                            <button className='cancle' onClick={()=>setOpenModal(false)}>
                                Cancle</button>
                            <button type='submit' className='add' onClick={handleAnswer}>
                                Add Answer
                            </button>
                        </div>     
                    </Modal>
                </div>
                <div className='post__answer'>
                    {getAnswer.map(({id,answers})=>(
                        <p
                        key={id}
                        style={{position:"relative",
                        paddingBottom:"5px"}}
                        >
                            {
                                Id===answers.questionId?(
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
                                                {answers.user.display?answers.user.display:answers.user.email}{" "}
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
                <img src={image} 
                alt="" />
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <ArrowUpwardOutlinedIcon/>
                    <ArrowDownwardOutlinedIcon/>
                </div>
                <div className='post__footerMiddle'>
                    <RepeatOutlinedIcon/>
                    <ChatBubbleOutlineOutlinedIcon/>
                </div>
                <div className='post__footerLeft'>
                    <ShareOutlinedIcon/>
                    <MoreHorizOutlinedIcon/>
                </div>
            </div>
        </div>
    );
};

export default Post
