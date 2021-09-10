import React from 'react';
import '../css/SidebarOptions.css';

function SidebarOptions({setSelection}) {
    
    return (
        <div className='sidebaroptions'>

            <div className='sidebaroption' onClick={()=>setSelection("Technology")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg" 
                alt="Technology" />
                <p>Technology</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Technical Events")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-18797-100-B7cd2Zkrhke1Bd3yn2Vq0HIwXIVg0JaW.jpeg" 
                alt="Technical Events" />
                <p>Technical Events</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Innovation")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-3906-100-3WJwKe2alb83spIH7rfECXY49noETA9x.jpeg" 
                alt="Innovation" />
                <p>Innovation</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Placement")}>
                <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg" 
                alt="Placement" />
                <p>Placement</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Sports")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-795-100-fujtazxcynewvtxarymxenpcldxwczqq.jpeg" 
                alt="Sports" />
                <p>Sports</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Cultural Events")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" 
                alt="Cultural Events" />
                <p>Cultural Events</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Transportations")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2587-100-Cg7htHNXLNzX0Pf3PGbKJ9RFT5y54Geb.jpeg" 
                alt="Transportations" />
                <p>Transportations</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Hostel Life")}>
                <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-4600-100-Tu9r6tIH3ysCZM71TLxbSRhOeejLecHy.jpeg" 
                alt="Hostel Life" />
                <p>Hostel Life</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Canteen")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-1027-100-tgvinqyfjlnnyjglbiicbisovkptvjqn.jpeg" 
                alt="Canteen" />
                <p>Canteen</p>
            </div>

            <div className='sidebaroption' onClick={()=>setSelection("Others")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-3229-100-uazulrnpoeacbeuytiyqovquifuuurer.jpeg" 
                alt="Others" />
                <p>Others</p>
            </div>

        </div>
    )
}

export default SidebarOptions;