import React from 'react'
import {Class} from './class'
import {theCourses,theServices} from '../helpers'



export  function Classes() {
    const darkOrange = "#c2410c";



  return (

    <div className="container">
    <h1 className="text-center mt-3 mb-4" style={{color:darkOrange}}> Clases y Servicios </h1>


    <div className='row row-cols-1 row-cols-md-2 g-4'>
    {theCourses().map((e)=>{
        return <Class theClass={e} key={e.id} modality={theServices}/>
    })}

</div>


    </div>
  )
}
