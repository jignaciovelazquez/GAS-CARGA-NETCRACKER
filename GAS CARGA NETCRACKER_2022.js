

//Variables

//Star
window.addEventListener('DOMContentLoaded', () => {


    ModoExterior();

})

//Eventos
document.getElementById("TipoArmado").addEventListener('change', () => {

    let ARMADO = document.getElementById("TipoArmado").value;
    console.log(ARMADO);

    if (ARMADO == "1") {
        console.log("EXTERIOR");
        ModoExterior();
    }
    if (ARMADO == "2") {
        console.log("MONTANTE");
        ModoMontante();
    }

})






document.getElementById("CajaExterior").addEventListener('change', () => {

    if ((document.getElementById("TipoCaja").value != "") && (document.getElementById("NCaja").value != "")) {

        let caja = document.getElementById("NCaja").value;

        FORMATO = `{\n 'version':1,\n 'servicios':[\n {\n 'pisos':'Todos',\n 'departamentos':'todos',\n 'descripcionCaja':'${caja}',\n 'destinoPuertos':[\n {\n '1':'1',\n '2':'2',\n '3':'3',\n '4':'4',\n '5':'5',\n '6':'6',\n '7':'7',\n '8':'8'\n }\n ]\n }\n ]\n }\n`;

        console.log(FORMATO);

        document.getElementById("JSONexterior").value = FORMATO;

    }

})

document.getElementById("COPIAR").addEventListener('click', () => {

    var codigoACopiar = document.getElementById('JSONexterior');
    codigoACopiar.select();
    codigoACopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');

})




//Funciones

const ModoExterior = () => {
    document.getElementById("CajaExterior").classList.add("d-block");
    document.getElementById("CajaExterior").classList.remove("d-none");
    document.getElementById("CajaMontante").classList.add("d-none");
    document.getElementById("CajaMontante").classList.remove("d-block");
}

const ModoMontante = () => {
    document.getElementById("CajaExterior").classList.remove("d-block");
    document.getElementById("CajaExterior").classList.add("d-none");
    document.getElementById("CajaMontante").classList.remove("d-none");
    document.getElementById("CajaMontante").classList.add("d-block");
}


