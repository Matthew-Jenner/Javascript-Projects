const url = "https://course-api.com/javascript-store-products";

const productsDom = document.querySelector(".products-center");

const fetchProducts = async () => {
	productsDom.innerHTML = `<div class="loading"></div>`;
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {
		productsDom.innerHTML = `<p class="error">there was an error</p>`;
	}
};

const displayProducts = (list) => {
	console.log(list);
};
const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
};
start();

fetchProducts();
