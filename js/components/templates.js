export function createProductCard(product) {
  return `
    <div class="featured__product" data-product-id="${product.id}">
      <div class="featured__box">
        <div class="featured__new">${product.status.toUpperCase()}</div>
        <img src="${product.image}" alt="${product.name}" class="featured__img" />
        <div class="product-overlay">
          <button class="btn-details">View Details</button>
          <button class="btn-add-cart">Add to Cart</button>
        </div>
      </div>
      <div class="featured__data">
        <h3 class="featured__name">${product.name}</h3>
        <span class="featured__preci">$${product.price}</span>
      </div>
    </div>
  `;
}