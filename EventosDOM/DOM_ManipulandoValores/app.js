function distribuiCaracter(){
    // Selecionar o valor de um elemento = .value
    let caracter = document.getElementById("entrada").value
    console.log(typeof caracter)
    // Limpar o campo de input 
    document.getElementById("entrada").value=""
    // Limpar espaços vazios
    caracter.trim()
    // Separar em caixas
    switch (caracter){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            document.getElementById("apenas_numeros").value += caracter;
            break;
        default:
            document.getElementById("apenas_letras").value += caracter;
            break
    }
}