document.addEventListener('DOMContentLoaded', function () {
     
    gestion();

});

//*** alertas toars
// para las alertas con toast
function showSuccessToast(msg) { swal('', msg, 'success'); }
function showWarningToast(msg) { swal('', msg, 'warning'); }
function showErrorToast(msg) { swal('', msg, 'error'); }
function showNoticeToast(msg) { swal('', msg, 'info'); }

function gestion() {
    console.log("este archivo js contiene funciones para formato decimal de monedas, formateo de fecha ");
};

//#region ********************* funciones de validacion solo numeros *** INICIO *******************************
function solo_numeros(e) {

    var key = window.Event ? e.which : e.keyCode;

    return (key >= 48 && key <= 57);

};
//#endregion ********************* funciones de validacion solo numeros *** FIN *******************************


//#region ********************* funciones para poner texto en mayuscula *** INICIO *******************************
function mayusculas(e) {
    e.value = e.value.toUpperCase();
};

//#endregion ********************* funciones de validacion solo numeros *** FIN  *******************************


//#endregion ********************* funciones de validacion solo letras *** INICIO *******************************
function solo_letras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false;
    for (var i in especiales) {
        if (key === especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) === -1 && !tecla_especial) {
        return false;

    }

};
//#endregion ********************* funciones de validacion solo letras *** FIN *******************************


//#region ************************ funciones para poner formato de decimales,miles,millones en un input *** INICIO ********************************************

 

function unmaskDinero(numeroString) {
    return +(numeroString.replace(/[^0-9.-]+/g, ""));
}
function maskDinero(numeroInt) {
    return "$" + parseFloat(numeroInt).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

//#region ************************ funciones para poner formato de decimales,miles,millones en un input *** INICIO ********************************************



//#region ************************************* FUNCIONES PARA FORMATEAR HORA *** INICIO **************************************************************************



///******************** inicio ****** funcion para formatear la fecha en año-mes-dia *************************************

//****** para formatear la hora con am /pm *** 24-11-2021 **** NUEVA FUNCION AGREGAR
function formatear_hora_am_pm(hora) {
    var horas = new Date(hora);
    var hours = horas.getHours();
    var minutes = horas.getMinutes();
    //var ampm = hours >= 12 ? 'pm' : 'am';
    //hours = hours % 12;
    hours = hours //? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var hour = hours + ':' + minutes //+ ' ' + ampm;
    return hour;
};


function formatear_hora(hora24) {


    var dt_hora = new Date(hora24);
    //console.log("hora para formatear: " + dt_hora);
    var minutos = parseInt(dt_hora.getMinutes());

    var hora = dt_hora.getHours() + ':' + minutos;
    console.log("horaa formateadaaaaasasdcxxx: " + hora);
    console.log("minutooooooooooooos: " + dt_hora.getMinutes());
    return hora;
}
//*** para formateo fecha año-mes-dia
function formatear_fecha2(fecha14) {
    var array_fechasol = fecha14.split("-");  //esta linea esta bien y te genera el arreglo
    var anyo = parseInt(array_fechasol[0]); // porque repites el nombre dos veces con una basta
    var mes1 = parseInt(array_fechasol[1]);
    var dia1 = parseInt(array_fechasol[2]);
    var mes;
    var dia;

    ////console.log("fechaa: ", array_fechasol);

    if (mes1 < 10) {
        mes = "0" + mes1;
    } else {
        mes = mes1;
    };

    if (dia1 < 10) {
        dia = "0" + dia1;
    } else {
        dia = dia1;
    };

    var fecha = anyo + "-" + mes + "-" + dia;
    ////console.log("fechaaaaa jajaja: " + fecha);
    return fecha;
};




//*************** formato fecha dia/mes/año

function formatear_fecha_dia(fecha_hora1) {

    var timestamp = fecha_hora1;
    var date = new Date(timestamp);
    var fecha_hora = date.toISOString();
    var array_fechasol = fecha_hora.split("-");  //esta linea esta bien y te genera el arreglo
    var anyo = parseInt(array_fechasol[0]); // porque repites el nombre dos veces con una basta
    var mes1 = parseInt(array_fechasol[1]);
    var dia1 = parseInt(array_fechasol[2]);
    var mes;
    var dia;

    ////console.log("fechaa: ", array_fechasol);

    if (mes1 < 10) {
        mes = "0" + mes1;
    } else {
        mes = mes1;
    };

    if (dia1 < 10) {
        dia = "0" + dia1;
    } else {
        dia = dia1;
    };
    var fecha = dia + "/" + mes + "/" + anyo;
    return fecha;
};


//*** para formateo fecha y hora 
function formatear_fecha_hora(fecha_hora1) {

    var timestamp = fecha_hora1;
    var date = new Date(timestamp);
    var fecha_hora = date.toISOString();
    var array_fechasol = fecha_hora.split("-");  //esta linea esta bien y te genera el arreglo
    var anyo = parseInt(array_fechasol[0]); // porque repites el nombre dos veces con una basta
    var mes1 = parseInt(array_fechasol[1]);
    var dia1 = parseInt(array_fechasol[2]);
    var mes;
    var dia;

    ////console.log("fechaa: ", array_fechasol);

    if (mes1 < 10) {
        mes = "0" + mes1;
    } else {
        mes = mes1;
    };

    if (dia1 < 10) {
        dia = "0" + dia1;
    } else {
        dia = dia1;
    };
    var fecha = anyo + "-" + mes + "-" + dia;
    return fecha;
};
///******************** fin ************ funcion para formatear la fecha en año-mes-dia *************************************
//#endregion ************************************* FUNCIONES PARA FORMATEAR HORA *** FIN **************************************************************************

//#region ***************************************  FUNCION PARA FORMATEO DECIMAL **** INICIO **************************************************************************
function formato_moneda(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e);
    }
};

//#endregion ***************************************  FUNCION PARA FORMATEO DECIMAL **** FIN  **************************************************************************


//#region **************************************** para impedir que se ingrese la fecha por el teclado en el control input type=date

//<input type="date" value="2019-06-29" onkeydown="return false" >

function no_teclas_fecha(e) {
    return false;
};

//#endregion **************************************** para impedir que se ingrese la fecha por el teclado en el control input type=date


//para que se use la tecla enter en el datatable
//esto se agrega en cada pagina cuando se va usar el datatable
//$(document).on('keypress', 'input', function (e) {
//    if (e.keyCode === 13 && e.target.type !== 'submit') {
//        e.preventDefault();
//        return $(e.target).blur().focus();
//    }
//});