function calcular() {
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('tab')

    let num = Number(numero.value)
    let resultado

    tab.innerHTML = ''
    for(let i=1; i<=10; i++){
        let item = document.createElement('option')
        resultado = num*i
        item.text = `${num} x ${i} = ${resultado}`
        tab.appendChild(item)
    }
}