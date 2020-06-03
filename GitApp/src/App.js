import React , { useState } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//react router dom 

import { BrowserRouter as Router , Switch , Route , Link  } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast , ToastContainer } from 'react-toastify';

// firebase ..

import firebase from "firebase/app";
import "firebase/auth";


//component 
import Home from "./Components/Home";
import SigninPage from "./Components/Signin";
import SignUpPage from "./Components/Signup";
import PageNotFound from "./Components/PageNotFound";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import { UserContext } from "./Context/UserContext";
import firebaseConfig  from "./Firebaseconfig/config";

//init Firebase ...
firebase.initializeApp(firebaseConfig);

const App = () => {

  const [user, setuser] = useState(null);
  

  return(
    <Router>
      <UserContext.Provider value={{ user , setuser }}>
       <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signin" component={SigninPage} />
          <Route exact path="/SignUp" component={SignUpPage} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
  
};

export default App;
