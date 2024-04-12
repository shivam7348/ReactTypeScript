import React from 'react';
import './App.css';
// import PersonDetails from './PersonDetails'
import Team from './Team';

function App() {
  // const Details = {
  //   Fname : 'Virat', 
  //   Lname : 'Kohli',
  //   Age : 34,
  //   isVegan : false

  // }
   const IPL = [ {
    team : "CSK",
    Clr : "Yellow"
   },
  {
    team: "MI",
     Clr: "Blue"
  },
  {
    team: "RCB",
     Clr: "Red"
  }]
  return (
    <>
    <Team IPL = {IPL}/>
    </>

  );
}

export default App;
