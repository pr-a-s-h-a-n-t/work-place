import React, { useState } from 'react'
import {  Grid, TextField, Button } from "@mui/material";
import {  doc, setDoc   } from "firebase/firestore"
import {  db } from "../../../../firebaseConfig";
import "./EmployerOnboarding.css";
import {  Notification } from "../../../../utils/Notifications";
import {  useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../../../firebaseConfig";


function EmployerOnboarding() {
  const navigate = useNavigate();
  const [uploadLoading, setUploadLoading] = useState(0);
  let inputRef = React.createRef();

    const [employerData, setEmployerData] = useState({
      companyName: "",
      industryType: "",
      noOfEmployees: "",
      companyWebsites: "",
      companyEmail: JSON.parse(localStorage.getItem("user")).email,
      companyPhone: "",
      companyLocation: "",
      companyTagline: "",
      companyDescription: "",
      logo: "",

    });

    const submit = async (e) => {
      e.preventDefault();
      console.log(employerData);
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user.uid;
      //call firebase function to create employer profile
      //store in firestore collection (userInfo)
      //create a doc with docId = uid
  
      // setDoc(docInfo,data)
      //docInfo= doc(database,collection name, docId)
      try {
        await setDoc(doc(db, "userInfo", uid), {
          ...employerData,
          type: "employer",
        });
        Notification({ message: "profile created successfully" });
        navigate("/employer/profile");
      } catch (err) {
        console.log(err);
        Notification({ message: "something went wrong" });
      }
    };


    const uploadLogo = (e) => {
      let file = e.target.files[0];
      console.log(file);
      //ref(storage,'path to file',file,name)
      const storageRef = ref(storage, "company-logo/" + file.name);
      //uploadBytesResumable(storage-Ref,file)
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadLoading(progress);
        },
        (error) => {
          Notification({ message: "something went wrong" });
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setEmployerData({
              ...employerData,
              logo: downloadURL,
            });
            Notification({ message: "file uploaded successfully" });
            setUploadLoading(0);
          });
        }
      );
  
      // upload file to firebase storage
      // get the url of the file
      // set the url to the logo value state
    };

  return (
    <form onSubmit={(e) => submit(e)} className="onboarding-container">
    <h2>Setup your Employer Profile</h2>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <label className="field-label">Company Name</label>
        <TextField
          required
          size="small"
          fullWidth
          value={employerData.companyName}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label className="field-label">Company Email</label>
        <TextField
          size="small"
          type="email"
          required
          disabled
          fullWidth
          value={employerData.companyEmail}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyEmail: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label className="field-label">Company Phone</label>
        <TextField
          size="small"
          required
          fullWidth
          value={employerData.companyPhone}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyPhone: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label className="field-label">Company Website</label>
        <TextField
          size="small"
          fullWidth
          value={employerData.companyWebsite}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyWebsite: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label className="field-label">Company Location</label>
        <TextField
          size="small"
          fullWidth
          value={employerData.companyLocation}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyLocation: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label className="field-label">Company tagline</label>
        <TextField
          size="small"
          fullWidth
          value={employerData.companyTagline}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyTagline: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label className="field-label">Industry Type</label>
        <TextField
          size="small"
          fullWidth
          value={employerData.industryType}
          onChange={(e) =>
            setEmployerData({ ...employerData, industryType: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label className="field-label">No. of employees</label>
        <TextField
          size="small"
          fullWidth
          value={employerData.noOfEmployees}
          onChange={(e) =>
            setEmployerData({ ...employerData, noOfEmployees: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <label className="field-label">Company description</label>
        <TextField
          multiline
          minRows={5}
          fullWidth
          value={employerData.companyDescription}
          onChange={(e) =>
            setEmployerData({ ...employerData, companyDescription: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <label className="field-label">Company Logo</label>
        {uploadLoading > 0 && uploadLoading <= 100 ? (
          <div>Loading {uploadLoading} %</div>
        ) : (
          <>
            <input
              accept="image/*"
              style={{
                display: "none",
              }}
              ref={inputRef}
              type={"file"}
              value={""}
              onChange={(e) => uploadLogo(e)}
            />
            <div className="upload-btn-container">
              <Button onClick={() => inputRef.current.click()}>
                Upoad Logo
              </Button>
             { employerData.logo&&<img alt="logo" width="200px" src={employerData.logo} />}
            </div>
          </>
        )}
      </Grid>
      <div className="btn-container">
        <Button type="submit">Complete Setup</Button>
      </div>
    </Grid>
  </form>
);
}


export default EmployerOnboarding;


// We are going to take this information from employer for onboarding purposes.

// Company name
// industry type
// no of employees
// company website
// company email
// company phone number
// company location
// company tagline  
// company description
// company logo
