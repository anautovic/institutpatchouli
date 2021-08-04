import React, {useEffect} from 'react'
import style from '../../styles/Galerie.module.css'
//import { Col, Card } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css';
const Menu = ({items}) => {

    useEffect(()=> {
        Aos.init({duration:500})
           
       }, [])
    return (
        < >
            {items.map((menuItem) => {
        const { id, img, alt } = menuItem;
       
        return (
<div key={id} className="col-md-4">
          <div data-aos="zoom-in" className="card mb-4  mt-3 shadow-sm">
          <div className="card" >
  <img src={img} className="card-img-top" alt={alt} style={{maxWidth: "18rem", maxHeight:'300px'}} />
 </div>
 </div>
 </div>

 )
})}



        </>
    )
}

export default Menu
