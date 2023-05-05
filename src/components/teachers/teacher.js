import React from 'react'

export function Teacher({object}) {
  const darkOrange='#c2410c'

return (
<div className="mt-3 mb-3 row aling-items-start border rounded-4 border-secondary-subtle shadow" >
  <img src={object.photo} className="rounded-3 col" alt="Picture of the Teacher" style={{maxHeight:'350px',maxWidth:'350px'}}/>
  <div className="col ">
    <h5 className="card-title mt-3 mb-3">{object.name}</h5>
    <p className="card-text">{object.resume}</p>
    <p className='card-text'>{object.resume2}</p>
    <div className="row ">

    {object.instagram==='' ? <p />:
    <h6 className="text-reset text-dark">
            Instagram:{" "}
            <a href={object.instagram}>
              <i className="fa-brands fa-instagram fa-lg" style={{color:darkOrange}}></i>
            </a>
          </h6>}  

          {object.youtube==="" ? <p />:
          <h6 className="text-reset text-dark">
            Youtube:{" "}
            <a href={object.youtube} className="text-reset text-dark">
              <i className="fa-brands fa-youtube fa-lg" style={{color:darkOrange}}></i>
            </a>
          </h6>}
          </div>
          </div>

</div> 

)}
