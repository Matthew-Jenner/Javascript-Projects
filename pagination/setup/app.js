import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUi = () => {
    displayFollowers(pages[index])
    displayButtons(btnContainer, pages, index)
}

const init = async() => {
    const followers = await fetchFollowers()
    title.textContent = 'pagination'
    pages = paginate(followers)
    setupUi()
}

window.addEventListener('load', init)