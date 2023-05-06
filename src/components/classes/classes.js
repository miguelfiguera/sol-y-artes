import React from 'react'
import {Class} from './class'
import {theCourses,theServices} from '../helpers'
import { FormModal } from './FormModal';
import {useState} from 'react'


export  function Classes() {
    const darkOrange = "#c2410c";
    const lightPurple = "#581c87";

    const [modal, setModal] = useState(false);

  return (
    <div>
    <div className="container">
    <h1 className="text-center mt-3 mb-4" style={{color:darkOrange}}> Clases y Servicios </h1>


    <div className='container d-flex p-2 flex-wrap justify-content-center'>
    {theCourses().map((e)=>{
        return <Class theClass={e} key={e.id} modality={theServices}/>
    })}
  <FormModal open={modal} closeModal={() => setModal(false)} />
</div>



    </div>
    <div class="modal-footer sticky-bottom">
            <button
              type="button"
              className="btn btn-secondary me-4 mb-4 rounded-pill"
              onClick={()=>setModal(true)}
              style={{ backgroundColor: lightPurple,zIndex:1020,opacity:0.8}}
            >
              Contactanos!
            </button>
          </div>
    </div>
  )
}
