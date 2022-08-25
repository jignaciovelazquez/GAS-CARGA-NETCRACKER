

//Variables

//Star


//Eventos







document.getElementById("CajaExterior").addEventListener('change', () => {

    if ((document.getElementById("TipoCaja").value != "") && (document.getElementById("NCaja").value != "")) {

        let caja = document.getElementById("NCaja").value;

        FORMATO = `{\n 'version':1,\n 'servicios':[\n {\n 'pisos':'Todos',\n 'departamentos':'todos',\n 'descripcionCaja':'${caja}',\n 'destinoPuertos':[\n }\n`;

        console.log(FORMATO);

        document.getElementById("JSONexterior").value = FORMATO;

    }

})

document.getElementById("COPIAR").addEventListener('click', () => {

    var codigoACopiar = document.getElementById('PARRAFO');
    codigoACopiar.select();
    codigoACopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');

})




//Funciones



