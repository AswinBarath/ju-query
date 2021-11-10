import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Question from '../../components/sidebar/Question';
import Feed from '../../components/post/Feed';
import './QuestionsPage.css';

function QuestionsPage() {
    return (
        <div className="home">
           <Navbar /> 
           <div className="Questions__content">
              <Question />
              <Feed />
           </div>
        </div>
    )
}

export default QuestionsPage;
