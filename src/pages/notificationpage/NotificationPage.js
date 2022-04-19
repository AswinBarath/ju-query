import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// import Question from '../../components/sidebar/Question';
// import MyFeed from '../../components/questions/MyFeed';
import './NotificationPage.css';

function NotificationPage() {
    return (
        <div className="home">
           <Navbar /> 
           <div className="Questions__content">
               <h2>Notifications</h2>
              {/* <Question /> */}
              {/* <MyFeed /> */}
           </div>
        </div>
    )
}

export default NotificationPage;
