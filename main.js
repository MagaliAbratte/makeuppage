let servicios1 = document.getElementById ('serv1')
let servicios2 = document.getElementById ('serv2')
let servicios3 = document.getElementById ('serv3')

let social = document.getElementById ('social')
let auto = document.getElementById ('automaquillaje')
let fotos = document.getElementById ('fotos')

social.addEventListener('click', function divInfo(){
    let divSocial = document.createElement ('div')
    divSocial.className = 'div-info'
    divSocial.innerHTML = `
    <h2>Maquillaje Social</h2>
    <p>Servicio de maquillaje social (a domicilio o en mi dirección en Nueva Córdoba). Incluye preparacion de la piel y aplicación de pestañas postizas individuales con acabado natural.</p>
    <p>Trabajo con productos de gama alta y media: MAC, Dior, Morphe, Idraet, MILA Marzi, L'Oreal</p>
    <h3>Valor del servicio (sin prueba de maquillaje): $6000. Efectivo o transferencia.</h3>
    <h4>Valor de la prueba de maquillaje (solo ojos, opcional): $3000.</h4>
    `
    servicios1.append (divSocial)
    social.removeEventListener ('click', divInfo)
})

auto.addEventListener ('click', function divInfo (){
    let divAuto = document.createElement ('div')
    divAuto.className = 'div-info'
    divAuto.innerHTML = `
    <h2>Clases de Automaquillaje</h2>
    <p>Clase personalizada o grupal (hasta 3 personas por clase). Orientada a aprender a realizar un maquillaje completo adaptado al tipo de rostro, gustos y necesidades. Para la clase, podes traer tu maquillaje para aprender a usarlo correctamente, y poder analizar que te falta en el kit personal.</p>
    <p>Incluye guia completa con todos los pasos a seguir y temas vistos en la clase.</p>
    <h3>Valor del servicio: $5000. Efectivo o transferencia.</h3>
    `
    servicios2.append (divAuto)
    auto.removeEventListener ('click', divInfo)
})

fotos.addEventListener ('click', function divInfo (){
    let divFotos = document.createElement ('div')
    divFotos.className = 'div-info'
    divFotos.innerHTML = `
    <h2>Maquillaje para producciones de fotos de moda</h2>
    <p>Maquillaje adaptado a la tematica de la produccion. Trabajo con productos de gama alta y media: MAC, Dior, Morphe, Idraet, MILA Marzi, L'Oreal. Incluye preparacion de la piel y aplicación de pestañas postizas individuales con acabado natural.</p>
    <h3>Valor del servicio: a acordar con productor de moda. Efectivo o transferencia.</h3>
    `
    servicios3.append (divFotos)
    fotos.removeEventListener ('click', divInfo)
})
