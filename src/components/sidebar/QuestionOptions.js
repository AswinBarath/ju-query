import React from 'react';
import './QuestionOptions.css';

function QuestionOptions() {
    return (
        <div>
            <div className="options">
                <div className="heading">
                    <strong>Questions</strong>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"  alt="Tech" />
                    <p>Questions for you</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-18797-100-B7cd2Zkrhke1Bd3yn2Vq0HIwXIVg0JaW.jpeg" alt="Events" />
                    <p>Answer requests</p>
                </div>
                <div className="option">
                    <img src="https://qphs.fs.quoracdn.net/main-thumb-t-3906-100-3WJwKe2alb83spIH7rfECXY49noETA9x.jpeg"  alt="innovation" />
                    <p>Answer Drafts</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionOptions;
