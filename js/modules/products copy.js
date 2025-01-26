import { createProductCard } from "../components/templates.js";

let allProducts = [];

export async function initProducts() {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    allProducts = data.products;

    // Verificar si estamos en la página de shop
    if (document.body.classList.contains('shop-page')) {
      renderAllProducts(allProducts);
    } else {
      // Renderizar los productos para cada sección de index.html
      renderProducts(allProducts, "featured"); // Productos con status 'featured'
      renderProducts(allProducts, "new"); // Productos con status 'new'
    }

    // Configurar los filtros y las interacciones de los productos
    setupFilterListeners();
    setupProductInteractions();
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

function renderAllProducts(products) {
  const productsContainer = document.getElementById("products-container");
  
  if (productsContainer) {
    console.log("Rendering products:", products.length); // Debug log
    productsContainer.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  } else {
    console.error("Products container not found"); // Debug error
  }
}     

function renderProducts(products, status) {
  const containerId = status === "featured" ? "featured-container" : "new-arrival-container";
  const productsContainer = document.getElementById(containerId);

  if (productsContainer) {  
    // Filtramos los productos según el 'status'
    const filteredProducts = products.filter(product => product.status === status);
    
    // Limpia los productos previos antes de agregar los nuevos
    productsContainer.innerHTML = "";

    // Agrega los productos dinámicamente
    productsContainer.innerHTML = filteredProducts
      .map((product) => createProductCard(product))
      .join("");
  }
}

function setupFilterListeners() {
  const categoryFilter = document.getElementById("category-filter");
  const priceFilter = document.getElementById("price-filter");
  const typeFilter = document.getElementById("type-filter");
  const statusFilter = document.getElementById("status-filter");

  [categoryFilter, priceFilter, typeFilter, statusFilter].forEach((filter) => {
    if (filter) {
      filter.addEventListener("change", applyFilters);
    }
  });
}

function setupProductInteractions() {
  const products = document.querySelectorAll(".featured__product");

  products.forEach((product) => {
    const detailsBtn = product.querySelector(".btn-details");
    const cartBtn = product.querySelector(".btn-add-cart");

    if (detailsBtn) {
      detailsBtn.addEventListener("click", () => {
        console.log("View details for product");
      });
    }

    if (cartBtn) {
      cartBtn.addEventListener("click", () => {
        console.log("Add to cart");
      });
    }  
  });
}

function applyFilters() {
  const categoryFilter = document.getElementById("category-filter").value;
  const priceFilter = document.getElementById("price-filter").value;
  const typeFilter = document.getElementById("type-filter").value;
  const statusFilter = document.getElementById("status-filter").value;

  let filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchType = typeFilter === "all" || product.type === typeFilter;
    const matchStatus =
      statusFilter === "all" || product.status === statusFilter;

    let matchPrice = true;
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      matchPrice = product.price >= min && product.price <= max;
    }

    return matchCategory && matchType && matchStatus && matchPrice;
  });

  renderProducts(filteredProducts);
}
