import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="fr">
                <Head>
                    <meta name="description" content="Tu souhaites devenir une professionnelle de la beauté et tu ne sais pas où te former ? 
        L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.
        En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat."/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap"  />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"  />
                   {/*<script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script>*/} 
                   <link rel="preconnect" href="https://app.snipcart.com" />
<link rel="preconnect" href="https://cdn.snipcart.com" />
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
                </Head>
                <body>
                     <script async data-id="78965" src="https://cdn.widgetwhats.com/script.min.js"></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument