import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    // listening there has change or not
    //onAuthStateChanged works when we login or logout
    //when the app is init
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    //We can log in when we have userObj
    <>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      <footer> &copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
