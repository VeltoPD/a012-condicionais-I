let idade = +prompt("idade?")
let ensinoMedioCompleto = confirm("Ensino médio completo?")
let cursaFaculdade = confirm("Cursando faculdade?")
console.log(typeof(idade)) //O sinal de mais na frente de prompt torna o input number

if (idade >= 18) {
    console.log("A pessoa é maior de idade.")
} else {
    console.log("A pessoa é menor de idade.")
}

if (ensinoMedioCompleto == true) {
    console.log("Ensino médio concluido")
} else {
    console.log("Ensino médio incompleto")
}

if (cursaFaculdade == false) {
    console.log("Não está cursando faculdade")
} else {
    console.log("Está cursando faculdade")
}