import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            

            <footer className="footer-section" style={{fontFamily:'Nunito'}}>
        <div className="container-fluid">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Antenne Kotto, Bonamoussadi, Douala</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <div className="cta-text">
                                <h4>Appelez nous</h4>
                                <span> 699504975 | 690915116 </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open" aria-hidden="true"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>nkenpaulette@yahoo.fr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            
                            <div className="footer-text">
                                <p>Venez découvrir l'institut de beauté Patchouli, situé au carrefour Antenne Kotto Bonamoussadi pour prendre soin de vous mais aussi pour faire 
                                votre shopping près de chez vous à prix discount.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/institutpatchouli"><i className="fab fa-facebook-f facebook-bg" aria-hidden="true"></i></a>
                                <a  href="/"><i className="fab fa-twitter twitter-bg" aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/institut_de_beaute_patchouli/?hl=en"><i aria-hidden="true" className="fab fa-instagram google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link href ="/">Accueil</Link></li>
                                <li><Link href="/maboutique">E-shop</Link></li>
                                <li><Link href="/formation">Formation</Link></li>
                                <li><Link href="/gallerie">Galerie</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Abonnez-vous</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Ne manquez pas de vous abonnez sur nos pages facebook</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://interna.vercel.app">Radiance consulting</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link href="/">Accueil</Link></li>
                                <li><Link href="/maboutique">E-shop</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
           
           <style jsx>
               {`
               
               ul {
                margin: 0px;
                padding: 0px;
            }
            .footer-section {
              background: #151414;
              position: relative;
            }
            .footer-cta {
              border-bottom: 1px solid #373636;
            }
            .single-cta i {
              color: #ff5e14;
              font-size: 30px;
              float: left;
              margin-top: 8px;
            }
            .cta-text {
              padding-left: 15px;
              display: inline-block;
            }
            .cta-text h4 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .cta-text span {
              color: #757575;
              font-size:1.3rem; 
              line-height: 1.5;
              letter-spacing: normal;
            }
            .footer-content {
              position: relative;
              z-index: 2;
            }
            .footer-pattern img {
              position: absolute;
              top: 0;
              left: 0;
              height: 330px;
              background-size: cover;
              background-position: 100% 100%;
            }
            .footer-logo {
              margin-bottom: 30px;
            }
            .footer-logo img {
                max-width: 200px;
            }
            .footer-text p {
              margin-bottom: 14px;
              font-size:1.3rem; 
              line-height: 1.5;
              letter-spacing: normal;
                  color: #7e7e7e;
             
            }
            .footer-social-icon span {
              color: #fff;
              display: block;
              font-size: 20px;
              font-weight: 700;
              font-family: 'Poppins', sans-serif;
              margin-bottom: 20px;
            }
            .footer-social-icon a {
              color: #fff;
              font-size: 16px;
              margin-right: 15px;
            }
            .footer-social-icon i {
              height: 40px;
              width: 40px;
              text-align: center;
              line-height: 38px;
              border-radius: 50%;
            }
            .facebook-bg{
              background: #3B5998;
            }
            .twitter-bg{
              background: #55ACEE;
            }
            .google-bg{
              background: #DD4B39;
            }
            .footer-widget-heading h3 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 40px;
              position: relative;
            }
            .footer-widget-heading h3::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -15px;
              height: 2px;
              width: 50px;
              background: #ff5e14;
            }
            .footer-widget ul li {
              display: inline-block;
              /*float: left;*/
              width: 50%;
              margin-bottom: 12px;
              font-size:1.3rem; 
              line-height: 1.5;
              letter-spacing: normal;
            }
            .footer-widget ul li a:hover{
              color: #ff5e14;
            }
            .footer-widget ul li a {
              color: #878787;
              text-transform: capitalize;
            }
            .subscribe-form {
              position: relative;
              overflow: hidden;
            }
            .subscribe-form input {
              width: 100%;
              padding: 14px 28px;
              background: #2E2E2E;
              border: 1px solid #2E2E2E;
              color: #fff;
            }
            .subscribe-form button {
                position: absolute;
                right: 0;
                background: #ff5e14;
                padding: 13px 20px;
                border: 1px solid #ff5e14;
                top: 0;
            }
            .subscribe-form button i {
              color: #fff;
              font-size: 22px;
              transform: rotate(-6deg);
            }
            .copyright-area{
              background: #202020;
              padding: 25px 0;
            }
            .copyright-text p {
              margin: 0;
              font-size:1.3rem; 
              line-height: 1.5;
              letter-spacing: normal;
              color: #878787;
            }
            .copyright-text p a{
              color: #ff5e14;
            }
            .footer-menu li {
              display: inline-block;
              margin-left: 20px;
            }
            .footer-menu li:hover a{
              color: #ff5e14;
            }
            .footer-menu li a {
              font-size:1.3rem; 
              line-height: 1.5;
              letter-spacing: normal;
              color: #878787;
            }
               
               `}
           </style>

        </div>
    )
}

export default Footer
