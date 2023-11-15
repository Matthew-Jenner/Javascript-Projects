import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem('store') || [];
console.log('Initial store', store)
const setupStore = (products) => {
	store = products.map((product) => {
		const {
			id,
			fields: { featured, name, price, company, colors, image: img },
		} = product;
		const image = img[0].thumbnails.large.url;
		return { id, featured, name, price, company, colors, image };
	});
    setStorageItem('store', store)
    console.log('updated store', store)
};

const findProduct = () => {};
export { store, setupStore, findProduct };
