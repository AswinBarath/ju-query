import React, { useEffect, useState } from 'react';
import db from '../firebase';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget';
import '../css/JUQuery.css'

function JUQuery() {

    const [posts, setPosts] = useState([]);
    const [selection,setSelection]=useState("feed");
    
    // useEffect() performs two queries for the database 
    // 1. If user selects the topic to see, 
    // 2. If the user didn't choose, hence display all of the posts
    useEffect(() => {
        selection === "feed" ?
            db.collection('queries')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=> ({
            id: doc.id,
            query: doc.data(),
            }
        )))):
            db.collection('queries')
            .orderBy('timestamp', 'desc')
            .where('section','==',selection)
            .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=> ({
            id: doc.id,
            query: doc.data()       
            }
        ))))
    }, [posts, selection])

    return (
        <div className = "juquery">
            <Navbar />
            <div className = "juquery__content">
                <Sidebar 
                    setSelection = {setSelection}
                />
                <Feed 
                    posts = {posts}
                />
                <Widget />
            </div>
        </div>
    );
}

export default JUQuery;
