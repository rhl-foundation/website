//footer for home pg, contact us pg, donate pg
const template = document.createElement('template');
template.innerHTML =`
<footer class="main-footer background-white2">
            <div class="main-footer__top">
                <div class="container">
                    <div class="row gutter-y-30">
                        <div class="col-md-12 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                            <div class="footer-widget footer-widget--about">
                                <a href="index.html" class="footer-widget__logo">
                                    <img src="assets/images/logo-dark.png" width="159" alt="Cleenhearts HTML Template">
                                </a>
                                <p class="footer-widget__about-text">H.No.4453, Sathe Nagar Near Manoj Kirana Store Narpoli,
                                    Bhiwandi ,Thane, Maharashtra-421305<br>
                                    
                                    PAN NO. AALCR3060M<br>
                                    
                                    Registration No.
                                    U85300MH2021NPL368070</p>
                            </div><!-- /.footer-widget -->
                            <a href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu" class="footer-widget__map">
                                <span class="footer-widget__map__text">View Map</span>
                                <span class="icon-paper-plane"></span>
                            </a>
                        </div><!-- /.col-md-12 col-xl-3 -->
                        <div class="col-xl-3 col-md-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div class="footer-widget footer-widget--contact">
                                <h2 class="footer-widget__title">Get in touch!</h2><!-- /.footer-widget__title -->
                                <ul class="list-unstyled footer-widget__info">
                                    <li> <span class="icon-location"></span>
                                        <address>Thane, Maharashtra, India</address>
                                    </li>
                                    <li> <span class="icon-phone"></span><a href="tel:(406)555-0120">+91 9607753148</a></li>
                                    <li> <span class="icon-envelope"></span><a href="mailto:needhelp@company.com">info@rhlf.org</a></li>
                                </ul><!-- /.list-unstyled -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-xl-3 col-md-5 -->
                        <div class="col-md-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div class="footer-widget footer-widget--links">
                                <h2 class="footer-widget__title">Quick Links</h2><!-- /.footer-widget__title -->
                                <ul class="list-unstyled footer-widget__links">
                                    <li><a href="assets/pdf's/Privacy Policy.pdf">Privacy Policy</a></li>
                                    <li><a href="assets/pdf's/T & C.pdf">Terms & Condition</a></li>
                                    <li><a href="assets/pdf's/Refund Policy.pdf">Refund Policy</a></li>
                                    <li><a href="assets/pdf's/Child Protection Policy.pdf">Child Protection Policy</a></li>
                                    <li><a href="assets/pdf's/POSH at work place.pdf">POSH Policy</a></li>
                                </ul><!-- /.list-unstyled footer-widget__links -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-md-3 -->
                        <div class="col-md-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                            <div class="footer-widget footer-widget--gallery">
                                <h2 class="footer-widget__title">Our Gallery</h2><!-- /.footer-widget__title -->
                                <div class="footer-widget__gallery">
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-1.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-2.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-3.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-4.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-5.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-6.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                </div><!-- /.footer-widget__gallery -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-md-4 col-xl-3 -->
                    </div><!-- /.row -->
                </div><!-- /.container -->
                <div class="main-footer__top__shape-box">
                    <img src="assets/images/shapes/footer-shape-hand-1-1.png" alt="hand" class="main-footer__top__shape-one">
                    <img src="assets/images/shapes/footer-shape-hand-1-2.png" alt="hand" class="main-footer__top__shape-two">
                </div><!-- /.main-footer__top__shape-box -->
                
                
                <!--Payment methods-->
                <div class="bottom-footer_paymentCards__3-Nha">
                    <img src="assets/images/payments/securePayment-6283ac127daa1d6e04990a23d7ee00d1.svg" alt="RHLF-secured payments">
                    <img src="assets/images/payments/visa.svg" alt="RHLF-visa">
                    <img src="assets/images/payments/mastercard-0ab3af6784d95ac5112560767a777895.svg" alt="RHLF-mastercard">
                    <img src="assets/images/payments/paytm.svg" alt="RHLF-paytm">
                    <img src="assets/images/payments/AmericanExpress-d0ace8ee5cb3c6692411d50862086b2c.svg" alt="RHLF-american AmericanExpress-d0ace8ee5cb3c6692411d50862086b2c">
                </div>


            </div><!-- /.main-footer__top -->
            <div class="main-footer__bottom">
                <div class="main-footer__bottom__bg" style="background: url('assets/images/backgrounds/footer-bottom-bg-1-2.png');"></div><!-- /.main-footer__bottom-bg -->
                <div class="container">
                    <div class="main-footer__bottom__inner">
                        <p class="main-footer__copyright">
                            &copy; Copyright <span class="dynamic-year"></span> Real Happiness Of Life Foundation.
                        </p>
                    </div><!-- /.main-footer__inner -->
                </div><!-- /.container -->
            </div><!-- /.main-footer__bottom -->
        </footer><!-- /.main-footer -->


  `
document.body.appendChild(template.content);