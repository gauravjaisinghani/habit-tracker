import React from 'react';
import './styles/Dashboard.css';
import app from "./base";


function Dashboard() {
    return(
        <div className="dashcontainer">
      <p>Dashboard</p>
      <hr></hr>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
    )
}

export default Dashboard;