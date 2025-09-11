function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours ()
    var min = data.getMinutes ()
    //var hora = 22
        msg.innerHTML = `Agora são exatamente ${hora}h:${min}min. <p>Tenha uma Boa Noite!</p>`
    if (hora >= 5 && hora <12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#f88e2c'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#09181b'
    }
}