const setDrink = (section) => {
section.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(e.target);
})

}
export default setDrink