function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno =document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 13) {
                img.setAttribute('src', 'fotobebemenino.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'fotoadulto.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'fotoidoso.png')
            } else {
                window.alert('Idade inválida.')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 13) {
                img.setAttribute('src', 'fotobebemenina.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'fotoadulta.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'fotoidosa.png')
            } else {
                window.alert('Idade inválida.')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}