import React, { useEffect} from 'react'
import { Row, Col, Card, Container} from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css';
const formations = () => {
    useEffect(() =>{
        Aos.init({duration:2500})
    }, [])
    return (
        <div>
            






            <Container fluid="lg xl ">  
<Row className="mt-5">
<div className="col-md-6 col-sm-6 col-xs-12">
<h3 className="mb-2">PATCHOULI BEAUTY ACADEMY </h3>
   	   <p>L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
    dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.<br></br>
    En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat.</p>
    <button type="button" className="btns" ><a href="tel:+237 690915116" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>
     </div>
     <div className="col-md-6 col-sm-6 col-xs-12" align="center">
     	<Image src="/pat.jpg" 
  alt= "promotrice" height={400} width={400}  />
     </div>






  
</Row>
      </Container>





      <div className="album py-5 bg-light">
    <Container fluid='xl lg'>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg" style={{width:'17rem'}} className="card-img-top" alt="Onglerie_flyer" />
 </div>

            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href=" https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg" download >télécharger</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/esthetique_v2kual.jpg"
   className="card-img-top" alt="coiffure_complete_flyer" style={{width:'17rem'}}/>
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                 
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" className="card-img-top" alt="make-up_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg"
   className="card-img-top" alt="coiffure_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" 
  className="card-img-top" alt="formation_complete_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg"
   className="card-img-top" alt="Onglerie_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </Container>
        </div>

<style jsx>{
    `
    .btns {
    
      background: orangered;
      color:hsl(185, 94%, 87%) ;
      margin-bottom: 2rem;
      padding: 0.375rem 0.75rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      font-size: 1.2rem;
      border: 2px solid transparent;
      cursor: pointer;
      box-shadow: 0 1px 3px #fff;
      border-radius: 0.25rem;
      display: block;
      width: 15rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 3rem;
    }
    .btns:hover {
      color:hsl(184, 91%, 17%) ;
      background: hsl(125, 71%, 66%)
    }
  `
}

</style>
        </div>
    )
}

export default formations
