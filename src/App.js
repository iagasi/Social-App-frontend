import './App.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import MyRoutes from './MyRoutes';
import jwt_decode from "jwt-decode";
import { useEffect, useState } from 'react';
import { AuthStateValue, FriendsStateValue } from './context/AuthContext';
import { LoginSucess } from './context/AuthAction';
import { $getUser, $getUserFriends } from './http/user';
import { SetAllFriends } from './context/friends/FriendsActions';

function App() {
  const { user, dispatch } = AuthStateValue()
 const{ friends,friendsDispatch}=FriendsStateValue()
  const [load, setLoad] = useState()
  const jwt = localStorage.getItem("SociallApp")
  console.log("appjs rendering");

  useEffect(async () => {
    console.log("setting user");
    if (jwt) {
      const login = jwt_decode(jwt)

      if (jwt) {
        const currentUser = await $getUser(login._doc._id)
        currentUser && dispatch(LoginSucess(currentUser));
        const userFriends=await $getUserFriends(currentUser._id)
      
      
      friendsDispatch(SetAllFriends(userFriends))
       
      }
    }
  }, [])
   console.log(friends)

  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>

  );
}

export default App;
