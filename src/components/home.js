import React from "react";
import Plan1 from "../graphic_resources/Flyer cartel para clases de guitarra instrumentos música extraescolares fotográfico blanco y negro.png";
import Plan2 from "../graphic_resources/Instagram story  instrumentos musicales oscuro blanco y negro .png";
import Plan3 from "../graphic_resources/jazz club flyer -1 (2).png";
import video from "../graphic_resources/video5082427284611138643.mp4"
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


export function Home() {

  const lightPurple='#581c87'
  const darkOrange='#c2410c'
  const darkPurple='#3b0764'

  const stylingDark={
    color:darkPurple
  }

  return (
    <div className="container shadow">

      <div className="text-center">
        <h1 style={{color:darkOrange}}>Escuela Sol y Artes</h1>
        <p style={stylingDark}>
          Somos una organización de músicos con formación profesional
          que prestamos servicios de clases particulares a domicilio y online.
        </p>
      </div>


      <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={video} type="video/mp4" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
        

      <div className="container">
        <div className="row align-items-start mt-5 mb-5 border-bottom border-dark">
          <img
            src={Plan1}
            alt="Clases de guitarra, informacion"
            className="col-3"
          />
          <div className="col">
            <h2 style={stylingDark}>title</h2>
            <p style={stylingDark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam in quam consectetur volutpat. Aenean posuere, sem sit amet consectetur feugiat, nulla odio vulputate justo, quis varius metus felis quis magna. Aenean laoreet sapien lacus, eu blandit leo vestibulum et. Aliquam dapibus, mi a pharetra pulvinar, eros eros sollicitudin mauris, ac lobortis quam libero quis metus. Sed nibh risus, laoreet quis elit vitae, suscipit faucibus eros. Pellentesque et justo tortor. Nullam vitae erat id risus iaculis convallis a et ante. Quisque consequat nec nibh vitae euismod. Donec quis tellus mi. Sed sodales mauris sed vehicula auctor.
            </p>
          </div>
        </div>



        <div className="row align-items-start mt-5 mb-5  border-bottom border-dark">
          <div className="col">
            <h2 style={stylingDark}>Title 2</h2>
            <p style={stylingDark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam in quam consectetur volutpat. Aenean posuere, sem sit amet consectetur feugiat, nulla odio vulputate justo, quis varius metus felis quis magna. Aenean laoreet sapien lacus, eu blandit leo vestibulum et. Aliquam dapibus, mi a pharetra pulvinar, eros eros sollicitudin mauris, ac lobortis quam libero quis metus. Sed nibh risus, laoreet quis elit vitae, suscipit faucibus eros. Pellentesque et justo tortor. Nullam vitae erat id risus iaculis convallis a et ante. Quisque consequat nec nibh vitae euismod. Donec quis tellus mi. Sed sodales mauris sed vehicula auctor.
            </p>
          </div>
          <img className="col-3" src={Plan2} alt="Instrumentos musicales" />
        </div>



        <div className=" row align-items-start mt-5 mb-5">
          <img className="col-3" src={Plan3} alt="Jazz Club Flyer" style={{maxHeight:400,maxWidth:200}} />
          <div className="col">
            <h2 style={stylingDark}>Title 3</h2>
            <p style={stylingDark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam in quam consectetur volutpat. Aenean posuere, sem sit amet consectetur feugiat, nulla odio vulputate justo, quis varius metus felis quis magna. Aenean laoreet sapien lacus, eu blandit leo vestibulum et. Aliquam dapibus, mi a pharetra pulvinar, eros eros sollicitudin mauris, ac lobortis quam libero quis metus. Sed nibh risus, laoreet quis elit vitae, suscipit faucibus eros. Pellentesque et justo tortor. Nullam vitae erat id risus iaculis convallis a et ante. Quisque consequat nec nibh vitae euismod. Donec quis tellus mi. Sed sodales mauris sed vehicula auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
