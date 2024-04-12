import React from 'react'
interface PersonDetailType {
    Details : {
        Fname : string,
        Lname : string,
        Age : number
        isVegan : boolean
    }
}

function PersonDetails( props : PersonDetailType) {
  return (
    <div>
        <div>First Name - {props.Details.Fname}</div>
        <div> Last Name - {props.Details.Lname}</div>
        <div>Age - {props.Details.Age}</div>
        <div>{props.Details.isVegan ? <p> He is Vegan</p> : <p> He is not vegan</p>}</div>
    </div>
  )
}

export default PersonDetails