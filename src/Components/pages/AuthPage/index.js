import React from "react";
import { Grid } from "@mui/material";
import { auth } from "../../../firebaseConfig";
import { useLocation } from "react-router-dom";
import "./index.css";
import googleIcon from "../../../assets/google-icon.png";
import GirlLogo from "../../../assets/authpagelogo.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function AuthPage({ type }) {
   
  const navigateuser = useNavigate();

  const signIn = () => {
    
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(type);
        if (type === "candidate") {
          //user exist
          //?user exist as candidate
          //!user exist as employer

          //user not exist--> redirect to candidate onboarding page
          navigateuser("/candidate/onboarding");
        } else {
          //user exist
          //?user exist as employer
          //!user exist as candidate

          //user not exist--> redirect to employer onboarding page`
          navigateuser("/employer/onboarding");
        }
        console.log(result, "result");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-page">
      <Grid xs={12} margin="auto" marginTop={9} 
        item
        sx={{
          width: "auto",
          display: { xs: "flex-col", md: "flex" },
             border: " 10px solid purple",
             borderRadius: "1.5rem",
          paddingTop: "20px",
        }}
      >
        <div className="auth-container">
          <h1>Welcome {type}</h1>
          <h2>SignIn</h2>
          <button onClick={signIn}>
            <img alt="icon" src={googleIcon} /> <div>Sign In With Google</div>
          </button>
        </div>

        <div className="logo-container">
          <img alt="logo" src={GirlLogo}  />
        </div>
      </Grid>
    </div>
  );
}

export default AuthPage;

// Importance point for Building authentication Logic!!! 

// if user is candidate and exist redirect to candidate profile page
// if user is candidate and not exist redirect to candidate onboarding page
// if user is employer and exist redirect to employer profile page
// if user is employer and not exist redirect to employer onboarding page

//if user is candidate and exist and he is tring to signIn as employer show him error message
//if user is employer and exist and he is tring to signIn as candidate show him error message
