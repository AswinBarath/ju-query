import React from 'react';
import { Add } from '@material-ui/icons';
import './SidebarOptions.css';

function SidebarOptions() {
    return (
        <div>
            <div className="options">
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"  alt="Tech" />
                    <p>Technology</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-18797-100-B7cd2Zkrhke1Bd3yn2Vq0HIwXIVg0JaW.jpeg" alt="Events" />
                    <p>Events</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-3906-100-3WJwKe2alb83spIH7rfECXY49noETA9x.jpeg"  alt="innovation" />
                    <p>Innovation</p>
                </div>
                <div className="option">
                    <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg" alt="Placement" />
                    <p>Placement</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-795-100-fujtazxcynewvtxarymxenpcldxwczqq.jpeg"  alt="HL" />
                    <p>Hostel Life</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" alt="Sports" />
                    <p> Sports</p>
                </div>
                <div className='option'>
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2587-100-Cg7htHNXLNzX0Pf3PGbKJ9RFT5y54Geb.jpeg" 
                    alt="Transportations" />
                    <p>Transportations</p>
                </div>
                <div className='option'>
                    <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-4600-100-Tu9r6tIH3ysCZM71TLxbSRhOeejLecHy.jpeg" 
                    alt="Hostel Life" />
                    <p>Hostel Life</p>
                </div>
                <div className='option'>
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-1027-100-tgvinqyfjlnnyjglbiicbisovkptvjqn.jpeg" 
                    alt="Canteen" />
                    <p>Canteen</p>
                </div>
                <div className="option">
                    <Add />
                    <p className="text">Discover Spaces</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarOptions;
