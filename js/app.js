const countDownElement = document.getElementById('count-down')

let clock = 10

const idInterval = setInterval(countDown, 1000)

const numbersArray = generateArrayRandomNumbers(0, 9, 5)

const userNumbersArray = []

alert('Memorizza i seguenti numeri: ' + numbersArray)

function countDown(){
    clock--
    if(clock == 0){ 
        clearInterval(idInterval)
        insertNumbers()
    }
    else countDownElement.innerHTML = clock
}

function generateArrayRandomNumbers(min, max, dim){
    const numbersArray = []
    do{
        const newNumber = generateRandomNumberBetween(min, max)
        if(!numbersArray.includes(newNumber)){
            numbersArray.push(newNumber)
        }
    }while(numbersArray.length < dim)
    return numbersArray
}

function generateRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function insertNumbers(){
    for(let i = 0; i < 5; i++){
        const userNumber = prompt('Inserisci un numero (numeri mancanti: ' + (5 - i) + ')' )
        userNumbersArray.push(userNumber)
    }
}