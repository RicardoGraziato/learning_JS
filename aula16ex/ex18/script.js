let numeros = []

function adicionar(){
    let numero = document.getElementById('txtnum')
    let tabela = document.getElementById('tab')
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
        tab.appendChild(item)
    }
    
    
}

function finalizar(){
    
}