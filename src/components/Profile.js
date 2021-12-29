import firebase from "../firebase";
import React, { useState } from "react";

const Profile = () => {
  const db = firebase.firestore();

  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  return (
    <div>
      {info.map((data) => (
        <p>{data.name}</p>
      ))}
    </div>
  );
};

export default Profile;
