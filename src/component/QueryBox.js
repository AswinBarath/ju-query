import React from 'react'
import '../css/QueryBox.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {Avatar, Input} from '@material-ui/core';
import { useState } from 'react';
import db from '../firebase';
import Modal from 'react-modal';
import { Link } from '@material-ui/icons';
import firebase from 'firebase';

Modal.setAppElement("#root");
const QueryBox=() =>{
    const user=useSelector(selectUser)
    const [openModal,setOpenModal]=useState(false);
    const [selectOption,setSelectOption]=useState();
    const [input,setInput]=useState();
    const [inputUrl,setInputUrl]=useState();
    const handleChange=(e)=>{
        setSelectOption(e.target.value);
    }
    const handleQuestion=(e)=>{
        e.preventDefault()
        setOpenModal(false);
        db.collection('queries').add({
            section:selectOption,
            question:input,
            imageUrl:inputUrl,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
        setInputUrl("");
        setSelectOption("");
       
    }
    return (
        <div className='queryBox'>
            <div className='queryBox__info'>
                <Avatar src={user.photo}/>
                <h5>{user.display}</h5>
            </div>
            <div className='queryBox__query'onClick={()=>setOpenModal(true)}>
                <p>What is Your Question or link?</p>
            </div>
            <Modal isOpen={openModal}
                onRequestClose={()=>setOpenModal(false)}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay:{
                        width:700,
                        height:600,
                        backgroundColor:"rgba(0,0,0,0.8)",
                        zIndex:"1000",
                        top:"50%",
                        left:"50%",
                        marginTop:"-300px",
                        marginLeft:"-350px"
                    }
                }}>
                    <div className='modal__title'>
                        <h5>Add Question</h5>
                        <h5>Choose Section</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className='modal__info'>
                        <Avatar
                        className='avatar'
                        src={user.photo}/>
                        <p>{user.display? user.display:user.email}</p>
                        <div className='modal__select'>
                            <select name="Choose Section" id="" onChange={handleChange} required>
                                <option value="">Select..</option>
                                <option value="Technology">Technology</option>
                                <option value="Technical Events">Technical Events</option>
                                <option value="Innovation">Innovation</option>
                                <option value="Placement">Placement</option>
                                <option value="Sports">Sports</option>
                                <option value="Cultural Events">Cultural Events</option>
                                <option value="Transportations">Transportations</option>
                                <option value="Hostel Life">Hostel Life</option>
                                <option value="Canteen">Canteen</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                        
                    <div className='modal__field'>
                        <Input
                        value={input}
                        required
                        onChange={(e)=>setInput(e.target.value)}
                        type='text'
                        placeholder="Select an appropriate option and post a question"/>
                    
                        <div className='modal__fieldLink'>
                            <Link/>
                            <Input
                            value={inputUrl}
                            onChange={(e)=>setInputUrl(e.target.value)}
                            className='modal__link'
                            type='text'
                            placeholder="Optional: include a link that gives context"/>
                        </div>
                        <div className='modal__buttons'>
                            <button 
                            className='cancle'
                            onClick={()=>setOpenModal(false)}>
                                Close
                            </button>
                            <button onClick={handleQuestion} type='submit' className='add'>
                                Add Question
                            </button>
                        </div>
                    </div>
                </Modal>
        </div>
    );
};

export default QueryBox;
