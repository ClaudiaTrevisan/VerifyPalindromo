const verifyPalindromo = (input) =>{
    const arrayInput = input.split("")

    const arrayInputReverse = arrayInput.reverse()

    const inputInverted = arrayInputReverse.join("")

    if(inputInverted === input){
        return console.log(`${input} é um palíndromo`)
    }
    
    return console.log(`${input} não é um palíndromo`)
}

verifyPalindromo('anilina')