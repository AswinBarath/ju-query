import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../css/JUQuery.css'
import Widget from './Widget';

function JUQuery() {
    return (
        <div className = "juquery">
            <Navbar />
            <div className = "juquery__content">
                {/* <Sidebar /> */}
                <Feed />
                {/* <Widget /> */}
            </div>
        </div>
    );
}

export default JUQuery;