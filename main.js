let servicios1 = document.getElementById ('serv1')
let servicios2 = document.getElementById ('serv2')
let servicios3 = document.getElementById ('serv3')

let social = document.getElementById ('social')
let auto = document.getElementById ('automaquillaje')
let fotos = document.getElementById ('fotos')

social.addEventListener('click', ()=>{
    let divSocial = document.createElement ('div')
    divSocial.innerHTML = `
    <p>Hola</p>
    `

    servicios1.append (divSocial)
})
