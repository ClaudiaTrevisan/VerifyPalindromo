const verifyPalindromo = (input) =>{
    const arrayInput = input.split("")

    const arrayInputReverse = arrayInput.reverse()

    const inputInverted = arrayInputReverse.join("")

    if(inputInverted === input){
        return console.log(true)
    }
    
    return console.log(false)
}

verifyPalindromo('anilina')