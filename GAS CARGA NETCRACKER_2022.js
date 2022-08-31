

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

        FORMATO = `{\n "version":1,\n "servicios":[\n {\n "pisos":"Todos",\n "departamentos":"todos",\n "descripcionCaja":"${caja}",\n "destinoPuertos":[\n {\n "1":"1",\n "2":"2",\n "3":"3",\n "4":"4",\n "5":"5",\n "6":"6",\n "7":"7",\n "8":"8"\n }\n ]\n }\n ]\n }\n`;


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

document.getElementById("BORRAR").addEventListener('click', () => {
    window.location.reload()
})



let Puerto = 1;

document.getElementById("GENERAR").addEventListener('click', () => {

    //let caja = document.getElementById("NCaja").value;

    let PuertosUsados = 0;


    for (let i = 1; i <= TotalCajas; i++) {
        let Puertosxpiso = document.getElementById("PUERTOS" + i).value;
        PuertosUsados = PuertosUsados + parseInt(Puertosxpiso, 10);

    }

    if (PuertosUsados == 0) {
        FORMATO = `{\n "version":2,\n "servicios":[\n {\n "mapeoMontante": [\n`;
    } else {
        FORMATO = `{\n "version":4,\n "servicios":[\n {\n "mapeoMontante": [\n`;
    }


    for (let i = 1; i <= TotalCajas; i++) {

        FORMATO = FORMATO + `{"pisos":"${document.getElementById("PISOS" + i).value}","caja":"${document.getElementById("YOFC" + i).value}","puertos":8},\n`;
        if (i == TotalCajas) {
            let result = FORMATO.slice(0, -2);
            FORMATO = result;
        }
    }
    FORMATO = FORMATO + `\n]\n },\n`;

    for (let i = 1; i <= TotalCajas; i++) {

    }



    for (let i = 1; i <= TotalCajas; i++) {

        let Puertosxpiso = document.getElementById("PUERTOS" + i).value;
        if (parseInt(Puertosxpiso, 10) > 0) {


            FORMATO = FORMATO + `{\n"pisos":"${document.getElementById("PISOS" + i).value}",\n"departamentos":"${document.getElementById("DPTOS" + i).value}",\n"descripcionCaja":"CEP-${document.getElementById("CajaCEP").value}",\n"destinoPuertos": [\n{\n`;



            for (let ind = 1; ind <= parseInt(Puertosxpiso, 10); ind++) {

                FORMATO = FORMATO + `"${Puerto}":"${Puerto}",\n`;
                Puerto++;
                if (ind == parseInt(Puertosxpiso, 10)) {
                    let result = FORMATO.slice(0, -2);
                    FORMATO = result;
                }

            }


            FORMATO = FORMATO + `\n}\n]\n},\n`;
        }


    }

    if (PuertosUsados < 8) {

        FORMATO = FORMATO + `{\n"pisos":"todos",\n"departamentos":"todos",\n"descripcionCaja":"CEP-${document.getElementById("CajaCEP").value}",\n"destinoPuertos": [\n{\n`;

        for (let inde = PuertosUsados + 1; inde <= 8; inde++) {

            FORMATO = FORMATO + `"${inde}": "${Puerto}",\n`;
            Puerto++;
            if (inde == 8) {
                let result = FORMATO.slice(0, -2);
                FORMATO = result;
            }

        }

        FORMATO = FORMATO + `\n}\n]\n}\n]\n}`;



    }

    document.getElementById("JSONmontante").value = FORMATO;

})



document.getElementById("CajaYOFC").addEventListener('change', () => {


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
                                        <option value=0>0</option>
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

        if (index == 1) {
            document.getElementById("DPTOS1").setAttribute("onchange", "prueba();");
        }

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

const prueba = () => {

    for (let index = 2; index <= TotalCajas; index++) {

        document.getElementById("DPTOS" + index).value = document.getElementById("DPTOS1").value;

    }
}


