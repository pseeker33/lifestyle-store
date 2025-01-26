export function createFooter() {
  const footerTemplate = `
    <footer class="footer section">
      <div class="footer__container bd-grid">
        <div class="footer__box">
          <h3 class="footer__title">SARA</h3>
          <p class="footer__deal">Products store</p>
          <a href="#"><img src="img/footerstore1.png" alt="" class="footer__store"/></a>
          <a href="#"><img src="img/footerstore2.png" alt="" class="footer__store"/></a>
        </div>
        <div class="footer__box">
          <h3 class="footer__title">EXPLORE</h3>
          <ul>
            <li><a href="index.html" class="footer__link">Home</a></li>
            <li><a href="index.html#featured" class="footer__link">Featured</a></li>
            <li><a href="shop.html" class="footer__link">Shop</a></li>
            <li><a href="index.html#suscribed" class="footer__link">Suscribe</a></li>
          </ul>
        </div>
        <div class="footer__box">
          <h3 class="footer__title">OUR SERVICES</h3>
          <ul>
            <li><a href="#" class="footer__link">Pricing</a></li>
            <li><a href="#" class="footer__link">Free Shipping</a></li>
            <li><a href="#" class="footer__link">Gift Cards</a></li>
          </ul>
        </div>
        <div class="footer__box">
          <h3 class="footer__title">FOLLOW</h3>
          <a href="#" class="footer__social"><i class="bx bxl-facebook-square"></i></a>
          <a href="#" class="footer__social"><i class="bx bxl-instagram-alt"></i></a>
          <a href="#" class="footer__social"><i class="bx bxl-twitter"></i></a>
        </div>
      </div>
      <p class="footer__copy">&#169; 2020 copyright all right reserved</p>
    </footer>
  `;
  return footerTemplate;
}