import React from 'react'

export function Img({obj}) {
  return (
<div className="card" style={{width: "18rem"}}>
  <img src={obj} className="card-img-top" alt="Student"/>
</div> 
 )
}
