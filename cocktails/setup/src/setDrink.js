const setDrink = (section) => {
	section.addEventListener("click", function (e) {
		// e.preventDefault();
		const id = e.target.parentElement.dataSet.id;
        // JSON.stringify JSON.parse
        localStorage.setItem('drink', id)
	});
};
export default setDrink;
