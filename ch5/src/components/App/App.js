import React from 'react'
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker';
import UserContext from '../User/User';


const user = {
  name: "Gabriel",
  email: "gabriel@gmail.com"
}

function App() {
  return (
      <React.StrictMode>
        <UserContext.Provider value={user}>
          <Header/>
          <TripMaker/>
        
        </UserContext.Provider>
      </React.StrictMode> 
  );
}

export default App;
