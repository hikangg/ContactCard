import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import ContactCard from './components/ContactCard';
import "./mock-db";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("/api/user/all").then(response => {
      setUserData(response.data);
  });
  }, []);

  return (
    <div className="App">
      {
        userData.map((user) => (
          <ContactCard key={user.userId} userName={user.fullName} trust={user.trust} imgUrl={user.profileImageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
