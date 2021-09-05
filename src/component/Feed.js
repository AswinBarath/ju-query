import React, { useEffect, useState } from 'react';
import '../css/Feed.css';
import db from '../firebase';
import Post from './Post';
import QueryBox from './QueryBox';
// import Sidebar from './Sidebar';

function Feed() {

    const [posts, setPosts] = useState([]);
    const [selection,setSelection]=useState()
    console.log(selection)
    // There are two queries for Database 1. If user selects the topic to see, 2. If the user didn't choose, hence display all of the posts
    useEffect(() => {
        selection?db.collection('queries')
        .orderBy('timestamp', 'desc')
        .where('section','==',selection)
        .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=> ({
        id: doc.id,
        query: doc.data(),
    }
    )))):
    db.collection('queries')
            .orderBy('timestamp', 'desc')
            // .where('section','==',selection)
            .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=> ({
            id: doc.id,
            query: doc.data()       }
        ))))
        
    })
    return (
        <div className='main'>
            <div className='sidebar'>
                {/* <Sidebar/> */}
                <div className='sidebar'>
                    {/* <SidebarOptions/> */}
                <div className='sidebaroptions'>
                <div className='sidebaroption' onClick={()=>setSelection("Technology")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg" 
                alt="Technology" />
                <p
                // value={Technology}
                // onClick={(e)=>setSelection("Technology")}
                >Technology</p>
            </div>
            <div className='sidebaroption' onClick={()=>setSelection("Technical Events")}>
                <img src="https://qphs.fs.quoracdn.net/main-thumb-t-18797-100-B7cd2Zkrhke1Bd3yn2Vq0HIwXIVg0JaW.jpeg" 
                alt="Technical Events" />
                <p 
                // onClick={()=>setSelection("Technical Events")}
                >Technical Events</p>
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
        </div>
            </div>
            
            <div className="feed">
                <QueryBox />
                {
                    posts.map(({id, query}) => (
                        <Post
                            key={id}
                            Id={id}
                            image={query.imageUrl}
                            section={query.section}
                            query= {query.question}
                            timestamp = {query.timestamp}
                            juQueryUser = {query.user}
                        />
                    ))
                }
            </div>
            <div className="widget">
            <div className="widget__header">
                <h5>Spaces to follow</h5>
            </div>
            <div className="widget__contents">
            <div className="widget__content">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAflBMVEX///8UHDv19fUQGTkABTEAACLd3uCtrbMAAC8LFTcAACpwc4MrMkx6fIfV1tm1trwAACcAAB0ACTEAABrIyc4bIkFqbXu+v8UAAADP0NTn6OkAAA1iZnaLjZh1d4Wkpa09Qlk2OU2bnaZbXW5FSF1AQlMfITwAABUiKkdSVmrWFoGWAAACe0lEQVR4nO2afZOaMBCHhSTyJhhA4fAMWHu9tt//C1YlInjQIV7PzXR+z38O2ckzkF2ThcUCAAAAAAAAAAAAAAAAZuHW8UNEuy/2EqH/CK/LL/bizHkEAS94/QdeTMwke6oXWy2TWSz32TO9gtXcgMiHF7xmAy8z4GUGvMyAlxnwMgNeZsDLDHiZ8Tcv17XPK/FUXRS1ahKLvHbNgfs8O8H97Ntx0FIi9Fqv0sDpCMTKs8IrCntWl4thcVtpZF6xcD4gb2JUXrH8qHUWI/aqUt3fYTwVItePlElF6+V+1/2abLsvk6RSbyE7L7BjF0DjtfG11g9dt1yVBUHQS0gar5q3GXi4TVsGzqYXQOPlt6srXfeGbAYln8Rr99reru10AIlXmV4m5bVlXk1bvMR6OoDES4WXSf3SMq9rOm6mA0i8oktVZU5lmVehve43g+Re3E6viNv5HON20sy2da/rBLetTnjtXlV40wE0/0N5W1eL6QASL/flMinzLfNabNt9s2h6Q7xBFtB46YXP3m8ux5+D3RiNVxW0G8PgXafkbp8xxm/be6rzUFtZz++VV8pbN3v//Jvlivr8uLye006HICnl9a18GBN7Lby7JoD2Ij4/nlD5hy8XmIi6y3R9k6PDh1oZo1/3Z5ZvKe+eZsDTQ397QdovrOKDL8ITUh7q4eaCuI+5S8qjUsqr7r8/s6DvOwq84GUAvMww9qqf6sV+letZlL/vvkurpkb+Ey+HhTPRf1CdV5GODpNi7KWXuZcpnVeUjV5nnNqLj16n98L9ssIrlXMzcZBuL10+5nKU/HNeC+8xmuu05dSIz2kBAAAAAAAAAAAAAAAAOX8Ad608luA68LAAAAAASUVORK5CYII="
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Jain University (JU) Chapter</h5>
                    <p>Initiative to provide guidance and awareness</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src="https://cdn-images-1.medium.com/fit/c/64/64/1*pys6Xb0bV4Ld9KcI8np8QQ.png"
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>TechSoftware</h5>
                    <p>Technology and Software blends into singularity</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Feed;
