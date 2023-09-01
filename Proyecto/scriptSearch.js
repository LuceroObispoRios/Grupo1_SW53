function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
let filterArray = [];

let empresasArray = [
  {
    nombre: "Transporte y mudanzas Rapi2",
    servicios: ["Transporte", "Carga", "Embalaje", "Montaje", "Desmontaje"],
    imagen: "image/empresaLogo1.jpg",
    destacado: "true",
  },
  {
    nombre: "Romabe transporte",
    servicios: ["Transporte", "Carga"],
    imagen: "image/empresaLogo2.jpg",
    destacado: "true",
  },
  {
    nombre: "Mudate Facil",
    servicios: ["Transporte", "Carga", "Embalaje", "Montaje", "Desmontaje"],
    imagen: "image/empresaLogo3.png",
    destacado: "false",
  },
  {
    nombre: "Bodegas y mudanzas Santana",
    servicios: ["Transporte", "Carga", "Embalaje", "Montaje", "Desmontaje"],
    imagen: "image/empresaLogo4.png",
    destacado: "false",
  },
  {
    nombre: "Practi Mudanza",
    servicios: ["Transporte", "Carga", "Embalaje"],
    imagen: "image/empresaLogo5.png",
    destacado: "false",
  },
  {
    nombre: "Malpartida Carga y mudanza",
    servicios: ["Transporte", "Carga"],
    imagen: "image/empresaLogo6.png",
    destacado: "false",
  },
  {
    nombre: "Mudanzas Plata",
    servicios: ["Transporte", "Carga"],
    imagen: "image/empresaLogo7.png",
    destacado: "false",
  },
  {
    nombre: "J&G Transporte y mudanzas",
    servicios: ["Transporte", "Carga", "Embalaje"],
    imagen: "image/empresaLogo8.png",
    destacado: "true",
  },
]

mostrarEmpresas(empresasArray)


// Mostrar empresas --------------------------------------------------------
function mostrarEmpresas(currarray){

  document.getElementById("card").innerHTML = "";
  let destacadasEmpresas=[];
  let nodestacadasEmpresas=[];

  for(var i=0; i<currarray.length; i++){
    if(currarray[i].destacado=="true"){
      destacadasEmpresas.push(currarray[i]);
    }
    else{
      nodestacadasEmpresas.push(currarray[i]); 
    }
  }

  // mostrar primero a las empresas destacadas

  for(var i=0; i<destacadasEmpresas.length; i++){
    document.getElementById("card").innerHTML += `
      <div class="mt-3 col-lg-4 col-md-6 col-sm-12">
        <div class="card p-3 ps-5 pe-5 h-100" style="box-shadow: 0px 0px 5px 0px #ff8800;">
          <h4 class="text-center">${destacadasEmpresas[i].nombre}</h4>
          <img src="${destacadasEmpresas[i].imagen}" style="object-fit: content; height: 30vh; width: 100%"/>
          <p class="mt-2">
            <b>Servicios:</b>  ${destacadasEmpresas[i].servicios.join(", ")}
          </p>
          <button class="btn btn-outline-dark  mt-auto" href="#" style="color: white;">Ver mas</button>
        </div>
      </div>
    `
  }

  // mostrar a las empresas que no son destacadas

  for(var i=0; i<nodestacadasEmpresas.length; i++){
    document.getElementById("card").innerHTML += `
      <div class="mt-3 col-lg-4 col-md-6 col-sm-12">
        <div class="card p-3 ps-5 pe-5 h-100" >
          <h4 class="text-center">${nodestacadasEmpresas[i].nombre}</h4>
          <img src="${nodestacadasEmpresas[i].imagen}" style="object-fit: content; height: 30vh; width: 100%"/>
          <p class="mt-2">
            <b>Servicios:</b>  ${nodestacadasEmpresas[i].servicios.join(", ")}
          </p>
          <button class="btn btn-outline-dark  mt-auto" href="#" style="color: white;">Ver mas</button>
        </div>
      </div>
    `
  }
}


// Filtrar por nombre de la empresa ---------------------------------------------
document.getElementById("inputBusqueda").addEventListener("keyup", function(){
  let text= document.getElementById("inputBusqueda").value;

  filterArray = empresasArray.filter(function(e){
    if(e.nombre.toLowerCase().includes(text.toLowerCase())){
      return e.nombre;
    }
  });

  if(this.value == "") {
    mostrarEmpresas(empresasArray);
  }
  else{
    if(filterArray==""){
      document.getElementById("sinResultados").style.display = 'block';
      document.getElementById("card").innerHTML = "";
    }
    else{
      mostrarEmpresas(filterArray);
      document.getElementById("sinResultados").style.display = 'none';
    }
  }
})
