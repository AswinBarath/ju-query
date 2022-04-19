import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import UserCards from './UserCards';
import './UsersPage.css';
import './UserCards.css';

function UsersPage() {
    return (
        <div className="home">
           <Navbar /> 
            <div className="Users__content">
                <div className="wrapper">
                    
                    <div className="box">
                        <p>                            
                            <br />JU Query Users
                        </p>
                    </div>

                    <div className="Cards">
                        <div className="container">
                            <UserCards />
                        </div>
                    </div>                
                    </div>
            
            </div>
        </div>
    )
}

export default UsersPage;
