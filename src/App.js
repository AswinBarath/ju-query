import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import JUQuery from './component/JUQuery';
import Login from './component/auth/Login';
import './App.css';

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
        user ? (<JUQuery />) : (<Login />)
      }
      
     </div>
  );
}

export default App;
