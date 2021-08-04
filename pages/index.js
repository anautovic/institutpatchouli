<<<<<<< HEAD
import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'

import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import Filter from '../components/Filter'

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setProducts(props.products)
  },[props.products])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])

  const handleCheck = (id) => {
    products.forEach(product => {
      if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  const handleCheckALL = () => {
    products.forEach(product => product.checked = !isCheck)
    setProducts([...products])
    setIsCheck(!isCheck)
  }

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach(product => {
      if(product.checked){
          deleteArr.push({
            data: '', 
            id: product._id, 
            title: 'Delete all selected products?', 
            type: 'DELETE_PRODUCT'
          })
      }
    })

    dispatch({type: 'ADD_MODAL', payload: deleteArr})
  }

  const handleLoadmore = () => {
    setPage(page + 1)
    filterSearch({router, page: page + 1})
  }

  return(
    <div className="home_page">
      <Head>
        <title>Home Page</title>
      </Head>

      <Filter state={state} />

      {
        auth.user && auth.user.role === 'admin' &&
        <div className="delete_all btn btn-danger mt-2" style={{marginBottom: '-10px'}}>
          <input type="checkbox" checked={isCheck} onChange={handleCheckALL}
          style={{width: '25px', height: '25px', transform: 'translateY(8px)'}} />

          <button className="btn btn-danger ml-2"
          data-toggle="modal" data-target="#exampleModal"
          onClick={handleDeleteAll}>
            DELETE ALL
          </button>
        </div>
      }

      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} handleCheck={handleCheck} />
          ))
        }
      </div>
      
      {
        props.result < page * 6 ? ""
        : <button className="btn btn-outline-info d-block mx-auto mb-4"
        onClick={handleLoadmore}>
          Charger plus
        </button>
      }
    
    </div>
  )
}


export async function getServerSideProps({query}) {
  const page = query.page || 1
  const category = query.category || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const res = await getData(
    `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
  )
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}

export default Home
=======
import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link'
import style from '../styles/Accueil.module.css'
const Accueil = () => {

    useEffect(() =>{
        Aos.init({duration:1000}, [])
    })
    return (
        <div>
            <Head>
            <title>Institut de beauté patchouli- formation en esthétique cosmétique</title>
            <meta name='keyword' content="Formation, institut de beauté, Pédicure Manicure, Hammam, Make up , patchouli, rasta passe-meches, antenne Kotto" />
        <meta name="description" content="Tu souhaites devenir une professionnelle de la beauté et tu ne sais pas où te former ? 
        L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.
        En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat." />
             <meta name="robots" content="index, follow" />
            </Head>
            

            <img src="https://res.cloudinary.com/wil/image/upload/v1620932120/hero1_hzhcjg.webp" className="img-fluid"
 alt="couverture patchouli"></img>

<div className="jumbotron">
<h1 className="text-justify text-center text-uppercase" data-aos="zoom-in" style = {{
    fontSize:'1.5rem'
}}>institut de beauté patchouli Centre de formation en esthétique, cosmétique et coiffure </h1>
                    <div className="row" data-aos="zoom-in">
                    <div className= "col-md-6 col-lg-6 ">
                        <p  className={style.accueiltitre}>Venez découvrir l'institut de beauté Patchouli pour prendre soin de vous mais aussi, pour faire votre
                            shopping près de chez vous à prix discount.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6"
                     >
           <img src="/gommage.jpg"  className={style.image_accueil} 
            alt="tresses" ></img>
             <img src="/accueil.jpg"  className={style.image_accueil} 
            alt="tresses" ></img>
                    </div>
                    </div>
                </div>

                <div className="row my-3">

	
    
                <Link href='/formations' >
    <div className="col-md-12 col-lg-4 col-sm-4 col-xs-12">
    	<div className={style.contentparts}>
        	<div className={style.contenticons}><i className="fas fa-user-graduate"
            style={{paddingTop:'5px'}} aria-hidden="true"></i></div>
            <div className={style.contenth3}>Formation</div>
            <div className={style.contentp}>
            L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques...</div>
        </div>
    </div>
    </Link>
    <Link href='/esthetique' >
    <div className="col-md-12 col-lg-4 col-sm-4 col-xs-12">
        
    	<div className={style.contentparts}>
        	<div className={style.contenticons}><i className="fa fa-spa" aria-hidden="true"></i></div>
            <div className={style.contenth3}>Esthétique</div>
            <div className={style.contentp}>Nous faisons des prestations en  soins spécifiques, soins de visage,  soins de corps,
massage, onglerie, épilation, et Maquillage</div>
        </div>
    </div>
    </Link>
    <Link href='/coiffure' >
    <div className="col-md-12 col-lg-4 col-sm-4 col-xs-12">
    	<div className={style.contentparts}>
        	<div className={style.contenticons}><i className="fas fa-cut" aria-hidden="true"></i></div>
            <div className={style.contenth3}>Prestation en Coiffure</div>
            <div className={style.contentp}> Céramique, Teinture, Pose pérruque Shampoing, Coiffure, Défrisage,Rasta, Nattes, </div>
        </div>
    </div>
    </Link>
        
</div>
                
 
 
    
        </div>
    )
}

export default Accueil
>>>>>>> f
