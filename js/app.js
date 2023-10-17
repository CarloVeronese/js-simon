const countDownElement = document.getElementById('count-down')

let clock = 30

const idInterval = setInterval(countDown, 1000)

const numbersArray = generateArrayRandomNumbers(0, 9, 5)

const userNumbersArray = []

let score = 0

alert('Memorizza i seguenti numeri: ' + numbersArray)

function countDown(){
    clock--
    if(clock == 0){
        clearInterval(idInterval)
        countDownElement.innerHTML = 'INSERISCI I NUMERI'
        insertNumbers()
        countDownElement.innerHTML = `RISULTATO: ${score}`
    }
    else countDownElement.innerHTML = clock
}

function generateArrayRandomNumbers(min, max, dim){
    const numbersArray = []
    do{
        const newNumber = generateRandomNumberBetween(min, max)
        // if(!numbersArray.includes(newNumber)){
        numbersArray.push(newNumber)
        // }
    }while(numbersArray.length < dim)
    return numbersArray
}

function generateRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function insertNumbers(){
    const numbersArrayToCompare = numbersArray
    for(let i = 0; i < 5; i++){
        const userNumber = prompt('Inserisci un numero (numeri mancanti: ' + (5 - i) + ')' )
        userNumbersArray.push(parseInt(userNumber))
    }
    score = compareArrays(numbersArrayToCompare, userNumbersArray)
}

function compareArrays(arrayA, arrayB){
    for(let i = 0; i < arrayB.length; i++){
        arrayElement = arrayB[i]
        if(arrayA.includes(arrayElement)){
            score++
            removeArrayElement(arrayA, arrayElement)
            console.log(arrayA)
        }
    }
    return score
}

function removeArrayElement(arrayA, value){
    const index = arrayA.indexOf(value)
    arrayA.splice(index, 1)
}