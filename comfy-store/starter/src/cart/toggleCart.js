import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventistener("click", () => {
	cartOverlay.classList.add("show");
});
closeCartBtn.addEventistener("click", () => {
	cartOverlay.classList.remove("show");
});

export const openCart = () => {
	cartOverlay.classList.add("show");
};
