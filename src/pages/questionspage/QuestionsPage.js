import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// import Question from '../../components/sidebar/Question';
import MyFeed from '../../components/questions/MyFeed';
import './QuestionsPage.css';

function QuestionsPage() {
    return (
        <div className="home">
           <Navbar /> 
           <div className="Questions__content">
              {/* <Question /> */}
              <MyFeed />
           </div>
        </div>
    )
}

export default QuestionsPage;
