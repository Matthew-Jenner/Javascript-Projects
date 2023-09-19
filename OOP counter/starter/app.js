function Counter (element, value){
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    this.valueDOM.textContent = this.value
}

Counter.prototype.increase = function() {
    console.log(this)
    this.value++
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function() {
    this.value--
    this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function() {
    console.log(this)
    this.value = 0
    this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)

firstCounter.increase()

function getElement (selection) {
    const element = document.querySelector(selection)
    if(element) {
        return element
    }
    throw new Error(`please check "${selection}" selector, no such element exists`)
}
