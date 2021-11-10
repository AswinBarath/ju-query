import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/post/Feed';
import './FollowingPage.css';

function FollowingPage() {
    return (
        <div className="home">
           <Navbar /> 
           <div className="Following__content">
              <Sidebar />
              <Feed />
           </div>
        </div>
    )
}

export default FollowingPage;
