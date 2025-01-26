import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createProductCard } from './components/templates.js';
import { initMenu } from './modules/menu.js';
import { initCart } from './modules/cart.js';
import { initNewsletter } from './modules/newsletter.js';
import { initProducts } from './modules/products.js';

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.classList.contains('shop-page') ? 'shop' : 'index';  

  // Insert header and footer
  document.getElementById('header').innerHTML = createHeader(currentPage);
  document.getElementById('footer').innerHTML = createFooter();

  // Initialize existing modules
  initMenu();
  initCart();
  initProducts();

  // Only init newsletter if newsletter element exists
  const newsletterElement = document.getElementById('newsletter');
  if (newsletterElement) {
    initNewsletter();
  }
});