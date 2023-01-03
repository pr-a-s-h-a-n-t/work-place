import React, { useContext } from "react";
import { Grid } from "@mui/material";

import "./index.css";
import googleIcon from "../../../assets/google-icon.png";
import GirlLogo from "../../../assets/authpagelogo.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//  import setDoc , getDoc, db from firebase
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../firebaseConfig/index";
import { DarkmodeContext } from "../../../contex/darkmode/index";
import { light } from "@mui/material/styles/createPalette";

function AuthPage({ type }) {
  const [state, dispatch] = React.useContext(DarkmodeContext);
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
        //         if (type === "candidate") {

        // /**
        //  * trying to build the logic to  if the user is already exits redirect him to profile page otherwise
        //  * redirect him to onboarding page.
        //  * if(user == candidate) make logic to if the user is already there in db as candidate.
        //  * if(user == employer) make logic to if the user is already there in db as employer.
        //  * make sure that the user cannot be employer as well as candidate with same email address.
        //  *
        //  * step 1: user will authenticate and we will store his data in local storage.
        //  * step 2: we will run the function that will check if the user is already present in db or not.
        //  * if the user is not already present in db let him onboard, but check if the user wants to
        //  * onboard as employer or candidate, we can achieve this by using type prop which we are getting from
        //  * user. if the user type is employer redirect him to the employer onboarding page and if the user
        //  * type is candidate we will redirect him to the candidate onboarding page.
        //  * step 3: if the user is present in the db.
        //  * logic -- if(userInfo.exist()){
        //  *
        //  * case 1: if the user is present in the db as employer and he is trying to login as employer.
        //  * so redirect him to the employer profile page .
        //  * logic -- if(userInfo.type === type){
        //  * navigateUser("/employer/profile")
        //  * }
        //  *
        //  * case 2: if the user is present in the db as employer and he is trying to login as candidate
        //  * so redirect him to the employer profile page and also give him the alert message that with
        //  * same email address he can't be employer as well as candidate.
        //  *
        //  * logic -- if(userInfo.type === type){
        //  * navigateUser("/employer/profile")
        //  * alert(" you can't be employer as well as candidate with same email address");
        //  * }
        //  *
        //  * case 3: if the user is present in the db as candidate and he is trying to login as candidate.
        //  * so redirect him to the candidate profile page .
        //  * logic -- if(userInfo.type === type){
        //  * navigateUser("/candidate/profile")
        //  * }
        //  *
        //  * case : if the user is present in the db as candidate and he is trying to login as employer
        //  * so redirect him to the candidate profile page and also give him the alert message that with
        //  * same email address he can't be employer as well as candidate.
        //  *
        //  * logic -- if(userInfo.type === type){
        //  *  * navigateUser("/candidate/profile")
        //  * alert(" you can't be candidate as well as  employer with same email address");
        //  * }
        //  *
        //  *
        //  * }
        //  *
        //  *
        //  *
        //  *
        //  *
        //  *
        //  *
        //  */
        //           //user exist

        //           //user not exist--> redirect to candidate onboarding page
        //           navigateuser("/candidate/onboarding");
        //         } else {
        //           //user exist
        //           //?user exist as employer
        //           //!user exist as candidate

        //           //user not exist--> redirect to employer onboarding page`
        //           navigateuser("/employer/onboarding");
        //         }
        //

        //

        let uid = user.uid;
        let docRef = doc(db, "userInfo", uid);
        getDoc(docRef).then((doc) => {
          console.log(doc);
          if (doc.exists()) {
            console.log("user already exists", doc.data().type);

            if (doc.data().type === "employer") {
              navigateuser("/employer/profile");
              if (type === "candidate") {
                alert(
                  " you cannot be a candidate as well as a employer with same email address"
                );
              }
            } else if (doc.data().type === "candidate") {
              navigateuser("/candidate/profile");
              if (type === "employer") {
                alert(
                  " you cannot be a candidate as well as a employer with same email address"
                );
              }
            }
          } else {
            if (type === "candidate") {
              navigateuser("/candidate/onboarding");
            }
            if (type === "employer") {
              navigateuser("/employer/onboarding");
            }
          }
        });

        console.log(result, "result ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("mode", state.mode);

  return (
    <div
      className="auth-page"
      style={{
        minHeight: "100vh",
        color: state.shades.secondary,
        backgroundColor: state.shades.primary,
      }}
    >
      <Grid
        xs={12}
        margin="auto"
        marginTop={9}
        item
        sx={{
          width: "auto",
          margin: "auto",
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

        {state.mode && state.mode === "light" ? (
          <div
            className="logo-container"
            style={{
              color: state.shades.secondary,
              backgroundColor: state.shades.primary,
            }}
          >
            <img alt="logo" src={GirlLogo} />
          </div>
        ) : (
          ""
        )}
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
//         if (type === "candidate") {

// /**
//  * trying to build the logic to  if the user is already exits redirect him to profile page otherwise
//  * redirect him to onboarding page.
//  * if(user == candidate) make logic to if the user is already there in db as candidate.
//  * if(user == employer) make logic to if the user is already there in db as employer.
//  * make sure that the user cannot be employer as well as candidate with same email address.
//  *
//  * step 1: user will authenticate and we will store his data in local storage.
//  * step 2: we will run the function that will check if the user is already present in db or not.
//  * if the user is not already present in db let him onboard, but check if the user wants to
//  * onboard as employer or candidate, we can achieve this by using type prop which we are getting from
//  * user. if the user type is employer redirect him to the employer onboarding page and if the user
//  * type is candidate we will redirect him to the candidate onboarding page.
//  * step 3: if the user is present in the db.
//  * logic -- if(userInfo.exist()){
//  *
//  * case 1: if the user is present in the db as employer and he is trying to login as employer.
//  * so redirect him to the employer profile page .
//  * logic -- if(userInfo.type === type){
//  * navigateUser("/employer/profile")
//  * }
//  *
//  * case 2: if the user is present in the db as employer and he is trying to login as candidate
//  * so redirect him to the employer profile page and also give him the alert message that with
//  * same email address he can't be employer as well as candidate.
//  *
//  * logic -- if(userInfo.type === type){
//  * navigateUser("/employer/profile")
//  * alert(" you can't be employer as well as candidate with same email address");
//  * }
//  *
//  * case 3: if the user is present in the db as candidate and he is trying to login as candidate.
//  * so redirect him to the candidate profile page .
//  * logic -- if(userInfo.type === type){
//  * navigateUser("/candidate/profile")
//  * }
//  *
//  * case : if the user is present in the db as candidate and he is trying to login as employer
//  * so redirect him to the candidate profile page and also give him the alert message that with
//  * same email address he can't be employer as well as candidate.
//  *
//  * logic -- if(userInfo.type === type){
//  *  * navigateUser("/candidate/profile")
//  * alert(" you can't be candidate as well as  employer with same email address");
//  * }
