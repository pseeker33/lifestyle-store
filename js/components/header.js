export function createHeader(currentPage = 'index') {
  const headerTemplate = `
    <header class="l-header">
      <nav class="nav bd-grid">
        <div>
          <a href="index.html" class="nav__logo">SARA</a>
        </div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="index.html" class="nav__link ${currentPage === 'index' ? 'active' : ''}">Home</a>
            </li>
            <li class="nav__item">
              <a href="shop.html" class="nav__link ${currentPage === 'shop' ? 'active' : ''}">Shop</a>
            </li>
            <li class="nav__item">
              <a href="${currentPage === 'shop' ? 'index.html#featured' : '#featured'}" class="nav__link">Featured</a>
            </li>
            <li class="nav__item">
              <a href="${currentPage === 'shop' ? 'index.html#new' : '#new'}" class="nav__link">New</a>
            </li>
            <li class="nav__item">
              <a href="${currentPage === 'shop' ? 'index.html#suscribed' : '#suscribed'}" class="nav__link">Suscribed</a>
            </li>
          </ul>
        </div>
        <div>
          <i class="bx bx-cart nav__cart"></i>
          <i class="bx bx-menu nav__toggle" id="nav-toggle"></i>
        </div>
      </nav>
    </header>
  `;
  return headerTemplate;
}