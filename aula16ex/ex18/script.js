let numeros = []
let res = document.getElementById('res')

function adicionar(){
    let numero = document.getElementById('txtnum')
    let tabela = document.getElementById('tab')

    res.innerHTML = ''

    if(numero.value.length == 0){
        window.alert("Campo vazio.")
    }
    else if(numero.value > 100 || numero.value == 0){
        window.alert('Somente números entre 1 a 100')
    }
    else{
        let num = Number(numero.value)
        numeros.push(num)
        tabela.innerHTML = ''
        let item = document.createElement('option')
        item.text = `${num} adicionado.`
        tabela.appendChild(item)
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    res.innerHTML = ''
    let total = numeros.length
    let maior = numeros[0]
    let menor
    let soma = 0
    let media

    res.innerHTML += `Total de valores registrados: ${total}.` + '<br>'

    for(let i=0; i<total; i++){
        let aux = numeros[i]
        if(aux > maior){
            maior = aux
        }
    }
    if (numeros.length == 0){ maior = 0}
    res.innerHTML += `Maior valor registrado: ${maior}.` + '<br>'

    numeros.sort()
    if (numeros.length == 0){ menor = 0}
    else{menor = numeros[0]}
    res.innerHTML += `Menor valor registrado: ${menor}.` + '<br>'

    for(i=0; i<total; i++){
        soma = soma + numeros[i]
    }
    res.innerHTML += `A soma dos valores registrados é: ${soma}.` + '<br>' 

    if (numeros.length == 0){ media = 0}
    else{media = soma/numeros.length}
    res.innerHTML += `A média dos valores registrados: ${media}.`

    numeros = []
}