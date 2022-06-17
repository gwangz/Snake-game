import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from '/grid.js'

let food = getRandomFoodPostion()
const EXPANSION_RATE = 5


export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPostion()
    }
    
}

export function draw(gameBoard) {
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
     foodElement.style.gridColumnStart = food.x
     foodElement.classList.add('food')
     gameBoard.appendChild(foodElement)


}


function getRandomFoodPostion (){
    let newFoodposition
    while (newFoodposition == null || onSnake(newFoodposition)) {
        newFoodposition = randomGridPosition()
    
    }
    return newFoodposition
}
