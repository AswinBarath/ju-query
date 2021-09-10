import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import '../css/JUQuery.css';

function JUQuery() {
    return (
        <div className="home">
           <Navbar /> 
           <div className="JuQuery__content">
              <Sidebar />
              <Feed />
              <Widget />
           </div>
        </div>
    )
}

export default JUQuery;
