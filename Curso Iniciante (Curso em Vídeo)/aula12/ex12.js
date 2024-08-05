var agora = new Date()
var hora = agora.getHours()

if (hora == 1) {
    console.log(`Agora é ${hora} hora da manhã.`)
} else if (hora == 0){
    console.log(`Agora é meia noite.`)
} else {
    console.log(`Agora são ${hora} horas.`)
}

if(hora < 12 && hora >= 5) {
    console.log('Bom dia.')
} else if(hora <= 18 && hora >= 12) {
    console.log('Boa tarde.')
} else if(hora < 24 && hora > 18) {
    console.log('Boa noite.')
} else if(hora < 5) {
    console.log('Boa madrugada.')
}
