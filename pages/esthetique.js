import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {Services} from "../components/serviceData"
import {Container, Row} from 'react-bootstrap' 
//import style from '../styles/Service.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css';









const ServicePatchouli = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  

  const fetchJobs =  () => {
    const newJobs = Services
    
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs();
    Aos.init({duration:700})
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { description, titles, image  } = jobs[value]
  return (
<>


  <img src="https://res.cloudinary.com/wil/image/upload/v1624494006/WhatsApp_Image_2021-06-24_at_01.17.09_queodf.jpg"
     className="img-fluid"
    alt="bar Makeup"/>
    
    <section className="section">
      <div className="title">
        <h2>Services</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.category}
                
              </button>
              
            )
          })}
        </div>
        {/* job info */}
        <div className="row">
        <div className= "col" dat-aos= "fade-left">
        <article className="job-info" data-aos= "fade-left">
          <h3>Tarifs {titles}</h3>
          {description.map((description, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>

                <p>{description}</p>
              </div>
            )
          })}
        </article>
        </div>
        <div className="col-4 col-lg-6">
          <img src={image} alt="test" className="image-ctn" />
        </div>
        </div>
        
       
      </div>
      <button type="button" className="btns" ><a href="tel:+237 690915116" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>
     
    </section>
    

    <style jsx>
      {`
      
      .section {
        width: 90vw;
        margin: 5rem auto;
        
      }
     
      
      @media screen and (min-width: 992px) {
        .section {
          width: 95vw;
        }
      }
      
      .loading {
        text-align: center;
      }
      
      .underline {
        width: 5rem;
        height: 0.19rem;
        margin-bottom: 1.25rem;
        background: hsl(125, 71%, 66%);;
        margin-left: auto;
        margin-right: auto;
      }
      .title {
        margin-bottom: 4rem;
        text-align: center;
      }
      
      /*
      =============== 
      Jobs
      ===============
      */
      
      .jobs-center {
        width: 80vw;
        margin: 0 auto;
        max-width: 1170px;
      }
      .btn-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 4rem;
        flex-wrap: wrap;
      }
      .job-btn {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        font-size: 1.25rem;
       /* letter-spacing: 0.1rem;*/
        margin: 0 0.5rem;
        transition: all 0.3s linear;
        cursor: pointer;
        padding: 0.25rem 0;
        line-height: 1;
        outline-color: hsl(186, 100%, 94%);
      }
      .job-btn:hover {
        color: hsl(125, 71%, 66%);
        box-shadow: 0 2px hsl(125, 71%, 66%);
      }
      .active-btn {
        color: hsl(125, 71%, 66%);
        box-shadow: 0 2px hsl(125, 71%, 66%);
      }
      
      .job-info h3 {
        font-weight: 400;
      }
      .job-info h4 {
        text-transform: uppercase;
        color: hsl(210, 22%, 49%);
        background: hsl(212, 33%, 89%);
        display: inline-block;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
      }
      .job-date {
        letter-spacing: 0.1rem;
      }
      .job-desc {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 2rem;
        align-items: center;
        margin-bottom: 1.25rem;
      }
      .job-desc p {
        margin-bottom: 0;
        color: hsl(209, 34%, 30%);
      }
      .job-icon {
        color: hsl(125, 71%, 66%);
      }
      @media screen and (min-width: 992px) {
        .jobs-center {
          width: 90vw;
          display: grid;
          grid-template-columns: 200px 1fr;
          column-gap: 4rem;
        }
        .btn-container {
          flex-direction: column;
          justify-content: flex-start;
        }
        .job-btn {
          margin-bottom: 1rem;
        }
        .active-btn {
          box-shadow: -2px 0 hsl(125, 71%, 66%);
        }
        .job-btn:hover {
          box-shadow: -2px 0 hsl(125, 71%, 66%);
        }
      }
      .btns {
        text-transform: uppercase;
        background: hsl(125, 71%, 66%);
        color:hsl(185, 94%, 87%) ;
        padding: 0.375rem 0.75rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
        -webkit-transition: all 0.3s linear;
        transition: all 0.3s linear;
        font-size: 0.875rem;
        border: 2px solid transparent;
        cursor: pointer;
        box-shadow: 0 1px 3px #fff;
        border-radius: 0.25rem;
        display: block;
        width: 12rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
      }
      .btns:hover {
        color:hsl(184, 91%, 17%) ;
        background: hsl(184, 80%, 74%);
      }
      .image-ctn{
        max-height: 35vh;
        max-width: 20vw;
      }
      @media screen and (max-width: 1000px) {
        .image-ctn {
          max-width: 25vw;
          max-height: 30vh;
        }
      }
       
    
    
      
    
    
    
    
    
      
    .color{
      color: #2aaf80;
    }
    
    .choose_section_2{
      width: 100%;
      float: left;
    }
    
    .power_full{
      width: 100%;
      float: left;
      background-color: #2aaf80;
      border-radius: 30px;
      padding: 20px;
      box-shadow: 0px 0px 8px 0px;
    }
    
    .power{
      width: 100%;
      float: left;
      background-color: #ffffff;
      border-radius: 30px;
      padding: 20px;
        box-shadow: 0px 0px 8px 0px;
    
    
    }
    
    .icon{
      text-align: center;
      margin-top: 40px;
    }
    .powerful_text{
      width: 100%;
      float: left;
      text-align: center;
      margin-top: 20px;	
      color: #ffffff;
    
    }
    
    .totaly_text{
        width: 100%;
      float: left;
      text-align: center;
      margin-top: 20px;	
      color: #000;
    
    
    }
    
    .making_tetx{
      width: 100%;
      float: left;
      text-align: center;
      margin-top: 20px;	
      color: #ffffff;
      margin-left: 0;
    
    }
    
    .making{
      width: 100%;
      float: left;
      text-align: center;
      margin-top: 20px;	
      color: #000;
      margin-left: 0;
    
    }
    
    .btn_main{
      width: 50%;
      margin: 0 auto;
      text-align: center;
    }
    .read_bt{
      height: 50px;
        width: 100%;
        float: left;
        border-radius: 11px;
        border: 0px;
        color: #ffffff;
        background-color: #000;
        margin-top: 30px;
        font-size: 17px;
        margin-bottom: 30px;
    }
    
    .read_bt a:hover{ color: #ffffff;}
    
    .about_main{ 
      width: 100%;
      float: left;
      background-color: #2ba879;
        height: auto; 
      margin-top: 70px; 
      margin-bottom: 20px;
      position: relative;
     }
    
    
    .images{
      margin: 30px;
      width: 100%;
        margin-left: 0px;
    }
    
    .right_section_main{
      width: 100%;
      float: left;
      background-color: #ffffff;
        padding: 12px 40px 0px 40px;
        margin-top: 31px;
    }
    .dolar_tetx{
      width: 100%;
      float: left;
    
    }
    
    .special_text{
      color: #000;
      font-weight: 500;
    }
    
    .right_aero{
       max-width: 100%;
       left: -245px;
       position: relative;
       top: -160px;
    }
    
    .about_inner{
      width: 100%;
      float: left;
      margin-top: 10px;
      margin-bottom: 10px;	
      background-color: #ffffff;
      border-radius: 20px;
        border: 2px solid #55b994;
    }
    .dedicated{
      width: 100%;
      float: left;
      margin-top: 10px;
      margin-bottom: 10px;	
      background-color: #2ba879;
      border-radius: 20px;
      box-shadow: 0px 0px 8px 0px;
    
    
    }
    
    .justo_text{
      width: 100%;
      text-align: center;
      float: left;
      margin: 0px;
      padding-bottom: 20px;
      padding-top: 20px;
      color: #ffffff;
    }
    .hosting_text{
      color: #ffffff;
      text-align: center;
      margin-top: 20px;
    
    }
    
    .bt_main{
      width: 16%;
      margin: 0 auto;
      text-align: center;
        margin-top: 45px;}
    
    
    .read_more{
      height: 50px;
        width: 100%;
        float: left;
        border-radius: 11px;
        border: 0px;
        color: #ffffff;
        background-color: #000;
        margin-top: 30px;
        font-size: 17px;
        margin-bottom: 30px;
    }
    
    .read_more a:hover{ color: #ffffff;}
      
     
      
      `}
    </style>
    </>
  )
}
export default ServicePatchouli