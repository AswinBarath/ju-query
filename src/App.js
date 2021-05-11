import React, { useEffect } from 'react';
import JUQuery from './component/JUQuery';
import Login from './component/auth/Login';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          display: authUser.displayName,
          email: authUser.email
        }));
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {
        user ? (<JUQuery />) : (<Login />)
      }
      
     </div>
  );
}

export default App;
