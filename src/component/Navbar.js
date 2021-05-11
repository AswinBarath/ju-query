import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, Input } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link'
import LanguageIcon from "@material-ui/icons/Language";
import '../css/Navbar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import Modal from 'react-modal';
import { ExpandMore } from '@material-ui/icons';
import firebase from 'firebase';

function Navbar() {

  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuery = (e) => {
    e.preventDefault()

    setOpenModal(false)

    db.collection('queries').add({
      query: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    })

    setInput("");
    setInputUrl("");


  }

  return (
    <div className="qHeader">
        <div className = "qHeader__logo">
            <img 
                src="../jgi_logo.jpg"
                alt="JGI icon"
                />
        </div>
        <div className = "qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className = "qHeader__input">
          <SearchIcon />
          <input type = "text" placeholder = "Search JU Query" />
        </div>
        <div className = "qHeader__Rem">
          <div className = "qHeader__avatar">
            <Avatar 
              onClick={() => auth.signOut()}
              src={user.photo}
            />
          </div>
          <LanguageIcon />
          <Button onClick={() => setOpenModal(true)}>Add Query</Button>
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
            <div className="modal__title">
              <h5>Add Query</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
                <Avatar
                  className="avatar"
                  src={user.photo}
                />
                <p>{user.display ? user.displayName: user.email} asked </p>
                <div className="modal__scope">
                  <PeopleAltOutlinedIcon />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className="modal__field">
                <Input
                  required
                  value = {input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Start your query with 'What', 'How', 'Why' etc."
                 />
                <div className="modal__fieldLink">
                  <LinkIcon />
                  <input
                    value = {inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    type="text"
                    placeholder="Optional: include an image link that gives context"
                  ></input>
                </div>
              </div>
              <div className="modal__buttons">
                <button className="close" onClick={() => setOpenModal(false)}>Close</button>
                <button onClick={handleQuery} type = "submit" className="add">Add Query</button>
              </div>
          </Modal>
        </div>
     </div>
  );
}

export default Navbar;
