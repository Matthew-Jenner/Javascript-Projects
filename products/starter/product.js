const productDom = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
	try {
		productDom.innerHTML = '<h4 class="product-loading">Lodi dodi....</h4>';
		const params = new URLSearchParams(window.location.search);
		const id = params.get("id");
		console.log(id);
		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		productDom.innerHTML = '<p class="error"> No luck my G.</p>';
	}
};

const displayProduct = (product) => {
	// compnay, colours, description, name:title, price, image(urls:img)
	const {
		company,
		colors,
		description,
		name: title,
		price,
		image,
	} = product.fields;
	const { url: img } = image[0];
	document.title = title.toUpperCase();
	// colours
	const colorsList = colors.map((color) => {
		return `<span class="product-color"
        style="background: ${color}"></span>`;
	}).join('')
	productDom.innerHTML = `<div class="product-wrapper">
    <img
        src="${img}"
        class="img"
        alt="${title}" />
    <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>${price / 100}</span>
        <div class="colors">
           ${colorsList}
        </div>
        <p>
          ${description}
        </p>
        <button class="btn">add to cart</button>
    </div>`;
};

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};

start();
