import React, { useEffect } from "react";
import { useState } from "react";
import UserProfile from "./User";
import'./App.css';

export default function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [ loading, setLoading] = useState(false);

  async function fetchUserData() {
    try{
      setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    setUserData(data);
    setLoading(false);

    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  function onSubmit() {
    fetchUserData();
    setUserName("");
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if(loading){
    return <h1>Loading Data ! Please Wait</h1>
  }

  console.log(userData);

  return (
    <div className="container">
      <div className="input-box">
      <input
        name="username"
        value={userName}
        type="text"
        placeholder="Search Github Username..."
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
      </div>
      
      {userData ? <UserProfile user={userData}/> : null}
    </div>
  );
}
