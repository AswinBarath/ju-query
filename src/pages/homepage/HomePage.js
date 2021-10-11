import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/post/Feed';
import Widget from '../../components/widget/Widget';
import './HomePage.css';

function HomePage() {
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

export default HomePage;
