import React from 'react';
import './App.css';
import PersonDetails from './PersonDetails'

function App() {
  const Details = {
    Fname : 'Virat', 
    Lname : 'Kohli',
    Age : 34,
    isVegan : false

  }

  
  return (
    <>
     <PersonDetails Details ={Details} />
     <br />
   <PersonDetails Details ={Details} />

    </>
 
  
  );
}

export default App;
