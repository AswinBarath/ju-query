import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomePage from './pages/homepage/HomePage';
import Login from './components/auth/Login';
import './App.css';
import Following from './pages/followingpage/FollowingPage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

 // Specifying something to react, like component needs to do something after rendering.
 // Here dispatch is the dependecy we provide, the useEffect triggers the callback function 
 // i.e, the first argument each time the state of dispatch (second argument) changes.
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          display: authUser.displayName,
          email: authUser.email
        }));
        // console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  // Conditional Rendering based on User's Authentication
  // Here, user is a custom hook which stores whether the user has authenticated or not
  // Juquery component is the homepage where the feed is visible for the user
  // Login component is the authentication page for the user
  return (
    <div className="App">
      {
        user ? 
          (
            <div>
              <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact path='/following' component={Following} />
              </Switch>
            </div>
          ) 
          : 
          (
            <Login />
          )
      }
      
     </div>
  );
}

export default App;
