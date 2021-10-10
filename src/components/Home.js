import React from 'react'
import captura from "./../Captura.PNG"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
const Home = ()=>{
    return (
        <div>
            <div className="slogan"> Filtra imágenes y videos facilmente</div>
            <div className="container-image">
            <img src={captura} className="image"></img>
           <div className="cont_btn">
           <div className="btn"> Decargar <FontAwesomeIcon icon={faChevronCircleDown}/></div>
            </div>
           </div>
        </div> 
    )
};

export default Home;