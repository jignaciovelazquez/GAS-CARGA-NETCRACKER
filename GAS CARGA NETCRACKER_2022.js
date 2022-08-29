

//Variables
let star = 0;

//Star
window.addEventListener('DOMContentLoaded', () => {


    ModoExterior();


})

//Eventos
document.getElementById("TipoArmado").addEventListener('change', () => {

    let ARMADO = document.getElementById("TipoArmado").value;
    if (ARMADO == "1") {
        ModoExterior();
    }
    if (ARMADO == "2") {
        ModoMontante();
    }
})






document.getElementById("CajaExterior").addEventListener('change', () => {

    if ((document.getElementById("TipoCaja").value != "") && (document.getElementById("NCaja").value != "")) {

        let TCAJA = document.getElementById("TipoCaja").value;
        console.log(TCAJA);


        switch (TCAJA) {
            case "1":
                document.getElementById("CCAJA").value = "SSC2806-SM-8";
                break;
            case "2":
                document.getElementById("CCAJA").value = "SPLICE";
                break
            case "3":
                document.getElementById("CCAJA").value = "KOC";
                break

            default:
                break;
        }



        let caja = document.getElementById("NCaja").value;

        FORMATO = `{\n 'version':1,\n 'servicios':[\n {\n 'pisos':'Todos',\n 'departamentos':'todos',\n 'descripcionCaja':'${caja}',\n 'destinoPuertos':[\n {\n '1':'1',\n '2':'2',\n '3':'3',\n '4':'4',\n '5':'5',\n '6':'6',\n '7':'7',\n '8':'8'\n }\n ]\n }\n ]\n }\n`;


        document.getElementById("JSONexterior").value = FORMATO;

    }

})

document.getElementById("COPIAR").addEventListener('click', () => {

    var codigoACopiar = document.getElementById('JSONexterior');
    codigoACopiar.select();
    codigoACopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');

})

document.getElementById("COPIAR2").addEventListener('click', () => {

    var codigoACopiar = document.getElementById('JSONmontante');
    codigoACopiar.select();
    codigoACopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');

})

document.getElementById("GENERAR").addEventListener('click', () => {

    //let caja = document.getElementById("NCaja").value;

    FORMATO = `{\n 'version':4,\n 'servicios':[\n {\n "mapeoMontante": [\n {`;


    document.getElementById("JSONexterior").value = FORMATO;




})



document.getElementById("CajaYOFC").addEventListener('change', () => {

    /*
    console.log(star);

    if (star == 0) {

        star = 1;

    }
    else {
        for (let index = 1; index <= TotalCajas; index++) {
            console.log("BORRADO");

            document.getElementById("YOFC" + index).remove();;
            document.getElementById("PISOS" + index).remove();;
            document.getElementById("DPTOS" + index).remove();;
            document.getElementById("PUERTOS" + index).remove();;
        }

    }

    console.log(star);
    //eliminar el div padre

    */

    const Cajaxpiso = document.createElement('DIV');
    const ElementoPadre = document.getElementById("CajaPisos");
    Cajaxpiso.classList.add("col-12", "position-relative");

    Cajaxpiso.innerHTML = `<div class="input-group">
                                <div class="col-2">
                                    <label class="col col-form-label fw-bold text-start">#CEC</label>
                                </div>
                                <div class="col-3">
                                    <label class="col col-form-label fw-bold text-start">Pisos que alimenta</label>
                                </div>
                                <div class="col-3">
                                    <label class="col col-form-label fw-bold text-start">Dptos que alimenta</label>
                                </div>
                                <div class="col-3">
                                    <label class="col col-form-label fw-bold text-start">Puertos usados</label>
                                </div>
                            </div>`;


    ElementoPadre.append(Cajaxpiso);



    TotalCajas = document.getElementById("CajaYOFC").value;




    for (let index = 1; index <= TotalCajas; index++) {

        const Cajaxpiso = document.createElement('DIV');
        const ElementoPadre = document.getElementById("CajaPisos");
        Cajaxpiso.classList.add("col-12", "position-relative");

        Cajaxpiso.innerHTML = `<div class="input-group pt-2">
                                <div class="col-2">
                                    <input type="text" class="form-control" id="YOFC">
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control" id="PISOS" placeholder="Pisos alimentados">
                                </div>
                                <div class="col-3">
                                    <input id="DPTOS" class="form-control" list="departamentos" 
                                        placeholder="Seleccione">
                                    <datalist id="departamentos">
                                        <option value="">
                                        <option value="todos">
                                    </datalist>
                                </div>
                                <div class="col-3">
                                    <select id="PUERTOS" class="form-select" required>
                                        <option value=0 selected disabled value="">Seleccione una opcion</option>
                                        <option value=1>1</option>
                                        <option value=2>2</option>
                                        <option value=3>3</option>
                                        <option value=4>4</option>
                                    </select>
                                </div>
                            </div>`;


        ElementoPadre.append(Cajaxpiso);
        document.getElementById("YOFC").setAttribute("id", "YOFC" + index);
        document.getElementById("PISOS").setAttribute("id", "PISOS" + index);
        document.getElementById("DPTOS").setAttribute("id", "DPTOS" + index);
        document.getElementById("PUERTOS").setAttribute("id", "PUERTOS" + index);

        document.getElementById("YOFC" + index).value = "CEC-" + index;


    }








    console.log("Crea un hijo");

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


