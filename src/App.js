import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed.js";
import {login, logout, selectUser} from "./features/userSlice";
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './fire';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth)
      {
        // I am logged in

        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      }
      else{
        // I am logged out
        dispatch(logout());
      }
    })

  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) :
        (<div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>)
      }

    </div>
  );
}

export default App;
