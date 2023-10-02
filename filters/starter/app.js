let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
	if(filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6> Sorry, me no likey </h6>`
        return  
        // without the return nothing happens
    }

	productsContainer.innerHTML = filteredProducts
		.map(({ id, title, image, price }) => {
			return `<article class="product" data-id="${id}">
       <img
           src="${image}"
           class="product-img img" />
       <footer>
           <h5 class="product-name">${title}</h5>
           <span class="product-price">${price}</span>
       </footer>
   </article>`;
		})
		.join("");
};

displayProducts();

// text filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
	const inputValue = searchInput.value;
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue);
	});
    displayProducts()
});
