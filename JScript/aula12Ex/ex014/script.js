function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = String(data.getMinutes()).padStart(2, '0');
    
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minuto}</strong> minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '../ex014/imagens/manhã.png'
        document.body.style.background = '#b5978b'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = '../ex014/imagens/tarde.png'
        document.body.style.background = '#947357'
    }else {
        //BOA NOITE
        img.src = '../ex014/imagens/Noite.png'
        document.body.style.background = '#002e3b'
    }
}