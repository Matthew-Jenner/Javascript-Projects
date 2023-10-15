const productDom = document.querySelector(".product");
const url =
	"https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
	try {
		productDom.innerHTML = '<h4 class="product-loading">Lodi dodi....</h4>';
       const params = new URLSearchParams(window.location.search)
       const id = params.get('id')
       console.log(id)
        const response = await fetch(`${url}?id=${id}`)
        const data = await response.json()
        return data
	} catch (error) {
        productDom.innerHTML = '<p class="error"> No luck my G.</p>';
    }
};

const displayProduct = (product) => {
	console.log(product);
};

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};

start();
