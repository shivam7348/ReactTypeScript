import React from 'react'

interface TeamPropsType {
 IPL : {
    team : string,
     Clr : string

 }[]

}
function Team(props : TeamPropsType) {
  return (
    <div>{props.IPL.map((team) => (<div>{team.team}{team.Clr}</div>))}</div>
  )
}

export default Team