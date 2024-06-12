function calcular() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var qtdPassos = document.getElementById('txtpassos')
    var res = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || qtdPassos.value.length == 0) {
        window.alert('[ERRO] Caixas vazias.')
    } else{
        res.innerHTML = 'Contando: '
        var fi = Number(fim.value)
        var qtdP = Number(qtdPassos.value)
        var passo = Number(inicio.value)
        while (passo <= fi) {
            res.innerHTML += `${passo} -> `
            passo = passo + qtdP
        }
        res.innerHTML += "FIM."
    }
}