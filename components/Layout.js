import React from 'react'
import Head from 'next/head'
//import Script from 'next/script'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import Footer from './footer' 
//

function Layout({children}) {
    return (
        <>
        <Head>



{/* Open Graph */}
<meta property="og:url" content="https://institutpatchouli.org/formations" key="ogurl" />
<meta property="og:image" content="https://res.cloudinary.com/wil/image/upload/v1624495958/formationInst_uzgfxm.jpg" key="ogimage" />
<meta property="og:site_name" content="https://institutpatchouli.org/formations" key="ogsitename" />
<meta property="og:title" content="Centre de Formation Institut patchouli -Esthetique-Cosmétique-Bonamoussadi" key="ogtitle" />
<meta property="og:description" content="Tu souhaites devenir une professionnelle de la beauté et tu ne sais pas où te former ? 
        L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.
        En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat." key="ogdesc" />
        

         <script dangerouslySetInnerHTML={{ __html: `async data-id="78965" src="https://cdn.widgetwhats.com/script.min.js"` }} />
        </Head>
        <div className="container-fluid">
       {/* <Script async data-id="78965" src="https://cdn.widgetwhats.com/script.min.js"></Script>*/} 
            <NavBar />
            <hr></hr>
            <Notify />
            <Modal />
            {children}
            <Footer />
        </div>
        </>
    )
}

export default Layout
