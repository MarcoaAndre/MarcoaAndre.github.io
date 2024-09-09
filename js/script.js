const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



// 2. getElementsByClassName - Resaltar festividades
const contenido = document.getElementsByClassName('myClass');
document.getElementById('highlightButton').addEventListener('click', () => {
    for (let i = 0; i < contenido.length; i++) {
        contenido[i].classList.add('highlight');
    }
});

 // 3. createElement y appendChild - Agregar una nueva festividad
 const addFestivityButton = document.getElementById('addFestivityButton');
 addFestivityButton.addEventListener('click', () => {
     const newFestivity = document.createElement('div');
     newFestivity.classList.add('festivity');
     newFestivity.innerHTML = `
         <style>
    .contenedor-js{
     display: inline-block;
    gap: 50px;
    margin-bottom: 20px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
   
}
    .contenedor-js>div{
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: #2D4263;
    border-radius: 20px;
}
.contenedor-js>div:hover{
    background-color: #11294d;
}
.img-producto{
    width: 300px;
    height: 300px;
}
    .informacion{
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:15px;
    color: white;
}
.informacion>p:first-child{
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 300;
    color: white;
}
.informacion .precio {
    font-size: 20px;
    font-weight: 500;
    color: white;
}
.informacion .precio span{
    font-size: 17px;
    font-weight: 300;
    color: white;
}
.informacion button{
    background-color: #263143;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
}
.informacion button:hover{
    background-color: #2D4263;
}
</style>
         <div id="contenedor" class="contenedor-js">
          <img src="/img/Medicina.png" alt="producto 2" class="img-producto">
            <div class="informacion">
                <p>Medicna para la tos</p>                   
                <p class="precio">Oferta 1500₡<span></span></p>
                <button>Comprar</button>
            </div>
            </div>
         
     `;
     
     document.getElementById('oferta').appendChild(newFestivity);
 });



  // 5. removeChild - Remover una festividad
  const oferta = document.getElementById('oferta');
  document.getElementById('delate').addEventListener('click', () => {
    oferta.remove();
  });

// 6. addEventListener y dispatchEvent - Mostrar información adicional
const infoButton = document.getElementById('infoButton');
const info = document.getElementById('info');
infoButton.addEventListener('click', () => {
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
});

// 7. cloneNode - Clonar un elemento
const clonedFestivity = independenceDay.cloneNode(true);
document.getElementById('festivities').appendChild(clonedFestivity);
