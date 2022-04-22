import React, {useContext} from 'react';
import './styles/Dashboard.css';
import app from "./base";
import { AuthContext } from './Auth.js';

// const { currentUser } = useContext(AuthContext);


function Dashboard() {
  const { currentUser } = useContext(AuthContext);

    return(
      <div className="dashcontainer">
        <div className='header'>
          <p className='title'>Dashboard</p>
          <div className='rightsection'>
          <p className='usergreet'>Hello <strong>{currentUser.email}</strong>!</p>
          <button onClick={() => app.auth().signOut()}>Sign out</button>
          </div>
        </div>
        <div className='main'>
          <div className='navlist'>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='contentcontainer'></div>
        </div>
        <div className='footer'></div>
    </div>
    )
}

export default Dashboard;