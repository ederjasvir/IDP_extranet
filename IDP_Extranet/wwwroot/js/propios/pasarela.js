

document.addEventListener('DOMContentLoaded', function () {
    console.log("se cargo la pasarelaaaaaaaaaaa");
   //#region obtener parametros de otra pagina
    document.getElementById("hd_cod").value = getUrlParameter('id');
    document.getElementById("hd_cod_profesional").value = getUrlParameter('id_profesional'); 
   //#endregion
    
    //***************************
    gestion();

});

//$(document).ready(function () {

//    //*******************************************************
//    //#region obtener parametros de otra pagina

//    document.getElementById("hd_cod").value = getUrlParameter('id');

//    //#endregion

//    //#region Funcion para manejar menu gestion
//    console.log("hola 2 jajajajajaj");
//    console.log("hola 2 jajajajajaj");
//    gestion();

//    //#endregion

//});




//#region ****************** OBTENER PARAMETROS DE OTRA PAGINA **** FUNCIONES CSS PARA ALERTAS DE NOTIFICACION (ALERTAS TOARS)  *******************


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
//#endregion ************************************************  OBTENER PARAMETROS DE OTRA PAGINA *** FIIIIN ************************************************


//#region ************************************** INICIO **** FUNCION PARA GESTIONAR LA PAGINA *******************************************
function gestion() {
     

    console.log("se cargo la funcion gestion...");
    cod = document.getElementById("hd_cod").value;
    vc_IdProfesional = document.getElementById("hd_cod_profesional").value;
    console.log("codigo de cita: " + cod);
    obtener_datos(cod);
}


function obtener_datos(cod) {

    var vc_persona = "Ares Vela - " + cod;
    var vc_especialidad = "Especialidad: Psicologia  - " + vc_IdProfesional;
    var especialista = "Especialista: Leonidas - " + vc_IdProfesional;
    var modalidad = "Modalidad: Online - " + cod;
    var fecha ="Fecha: 2022-03-10";
    var hora = "Hora: 03:30 pm";
    var costo = "Costo: S/. 110";
    $("#lbl_persona").text(vc_persona);
    //$("#hd_persona").val(vc_persona);
    
    
    $("#lbl_especialidad").text(vc_especialidad);
    $("#hd_especialidad").val(vc_especialidad);
    $("#lbl_especialista").text(especialista);
    $("#hd_especialista").val(especialista);



    $("#lbl_modalidad").text(modalidad);
    $("#hd_modalidad").val(modalidad);

    $("#lbl_fecha").text(fecha);
    $("#hd_fecha_cita").val(fecha);

    $("#lbl_hora").text(hora);
    $("#hd_hora_cita").val(hora);

    $("#lbl_costo").text(costo);
    $("#dc_costo_cita").val(costo);

    ////paa cargar controles del net con form
    //$("#in_persona").val("23");
    $("#in_persona").val(cod);
    $("#vc_nombre_completo").val(vc_persona);
    $("#in_nro_operacion").val(costo);
}

//function guardar_cita() {
    
//   //var id_persona=1;
//   //var vc_persona = $("#hd_persona").val();
//    var in_persona = $("#hd_cod").val();
//    var vc_nombre_completo = $("#vc_nombre_completo").val();
//    var in_nro_operacion = $("#in_nro_operacion").val();
//   ////datos paciente: 
//   // var vc_paciente = $("txt_paciente").val();
//   // var in_edad_paciente = $("#txt_edad_paciente").val();
//   // var vc_especialidad =$("#hd_especialidad").val();
//   // var vc_especialista = $("#hd_especialista").val();
//   // var vc_modalidad = $("#hd_modalidad").val();
//   // var dt_fecha_cita = $("#hd_fecha_cita").val();
//   // var dt_hora_cita = $("#hd_hora_cita").val();
//   // var dc_costo =$("#dc_costo_cita").val();
//   // var in_nro_operacion = $("#txt_nro_operaciones").val();
//   // var dt_fecha_pago = $("#txt_fecha_pago").val();

//    var oDatos_cita = [];
//    oDatos_cita.push({
//        in_persona: in_persona,
//        vc_nombre_completo: vc_nombre_completo,
//        in_nro_operacion: in_nro_operacion

//    });


//    //oDatos_cita.push({
//    //    //datos persona
//    //    id_persona:id_persona,
//    //    vc_persona:vc_persona,
//    //    //datos paciente: 
//    //    vc_paciente:vc_paciente,
//    //    in_edad_paciente:in_edad_paciente,
//    //    vc_especialidad:vc_especialidad,
//    //    vc_especialista:vc_especialista,
//    //    vc_modalidad:vc_modalidad,
//    //    dt_fecha_cita:dt_fecha_cita,
//    //    dt_hora_cita:dt_hora_cita,
//    //    dc_costo:dc_costo,
//    //    in_nro_operacion:in_nro_operacion,
//    //    dt_fecha_pago:dt_fecha_pago,

//    //});
//var json_oDatos_cita = JSON.stringify(oDatos_cita);
//    console.log("json_oDatos_citaaaaaaa: " , json_oDatos_cita);
//    alert("json_oDatos_citaaaaaaa: ", json_oDatos_cita);
  
//}

function guardar_cita() {
    alert("guardar_citaaaaaaaaaa");
    //*** cabecera 
    //var Vc_IdEmpleado1 = document.getElementById("hd_cod").value;
    //var vc_IdProfesional1 = document.getElementById("hd_cod_profesional").value;
    var vc_IdProfesional1 = "27";
    var Vc_IdEmpleado1 = "66";

    var codigo = "22";

    //**** detalle 
    var Vc_Especialidad = "001";//document.getElementById("sel_especialidad").value;
    console.log("Vc_Especialidaaaaaaaaaaaaaaaaaaaaaaaad: " + Vc_Especialidad);
    var fecha_formatDate = "2022-03-25 17:00:00";
    var Vc_TipoCita = "001";//document.getElementById("sel_tipo").value;
    var Vc_MotivoConsulta = "consulta de demostracion demo demo";
    var Vc_MedioPago = "001";
    var Vc_Direccion = "calle # uno";
    var Vc_CTrabajoCEstudio = "IDP CONSULTING";
    var Dt_FechaNacimiento = "2022-03-11 00:00:00";
    var Vc_Telefono = "920103061";
    var Vc_TipoPaciente = "001";
    var Vc_TipoAtencion = "001";

    //***** correo profesional
      Vc_IdEmpleado1 = "27";
    var NombreEmpleado = "VARA SALAS, RAQUEL";
    var DiaCitaCorreo = "01/04/2022";
    var HoraCitaCorreo = "18:00";

    //***** correo paciente 
    var in_cod_paciente = "66";
    var NombreEmpleado_paciente = "RAMOS PEREZ, RUTH ADELITA";
    var DiaCitaCorreo_paciente = "01/04/2022";
    var HoraCitaCorreo_cliente = "18:00";


    let obj_cab = new Array();
    let obj_cab_a = new Array();

    let obj_correo = new Array();
    let obj_correo_a = new Array();

    let obj_det = new Array();
    let obj_det_a = new Array();

    obj_cab.push({
        Vc_IdProfesional: "27",
        Vc_IdEmpleado: "66",
        Vc_Estado: "PR",
        Codigo: codigo.trim(),
        //FechaCreacion: "",
        //UltimaFechaModif: "",
        Vc_UltimoUsuario: "NFC"
    });
    obj_cab_a = JSON.stringify(obj_cab);

    obj_det.push({
        Vc_IdCita: "",
        Dt_FechaCreacion: "2022-03-25",
        Dt_UltimaFechaModif: "2022-03-25",
        Vc_UltimoUsuario: "1",//String(HD_IdCreador.trim()),
        Vc_Especialidad: Vc_Especialidad,//select_especialidad.trim(),
        Dt_FechaCita: fecha_formatDate,
        Vc_TipoCita: Vc_TipoCita,//select_tipo_cita.trim(),
        Vc_MotivoConsulta: Vc_MotivoConsulta,
        Vc_MedioPago: Vc_MedioPago,//select_medio_pago.trim(),
        Vc_Direccion: Vc_Direccion,//txt_direccion.trim(),
        Vc_CTrabajoCEstudio: Vc_CTrabajoCEstudio,//txt_centro_estudio_trabajo.trim(),
        Dt_FechaNacimiento: Dt_FechaNacimiento,//moment(dt_fecha_nacimiento).format("YYYY-MM-DD HH:mm:ss"),
        Vc_Telefono: Vc_Telefono,//txt_telefono.trim(),
        Vc_TipoPaciente: Vc_TipoPaciente,//select_tipo_paciente.trim(),
        Vc_TipoAtencion: Vc_TipoAtencion//select_tipo_atencion.trim()
    });
    obj_det_a = JSON.stringify(obj_det);

    obj_correo.push({
        Vc_IdEmpleado: vc_IdProfesional1,//PersonaProfesional,
        NombreEmpleado: NombreEmpleado,//txt_profesional.trim(),
        DiaCitaCorreo: DiaCitaCorreo,//dia_cita_correo,
        HoraCitaCorreo: HoraCitaCorreo//txt_hora_cita
    });
    obj_correo.push({
        Vc_IdEmpleado: in_cod_paciente,//PersonaEmpleado,
        NombreEmpleado: NombreEmpleado_paciente,//txt_empleado.trim(),
        DiaCitaCorreo: DiaCitaCorreo_paciente,//dia_cita_correo,
        HoraCitaCorreo: HoraCitaCorreo_cliente
    });
    obj_correo_a = JSON.stringify(obj_correo);

    console.log("obj_cab: \n ", obj_cab);
    console.log("obj_det \n ", obj_det);
    console.log("obj_correo \n ", obj_correo);

    //console.log("datos para el cabecera: ", obj_cab_a);
    //console.log("datos para el detalle: ", obj_det_a);
    //console.log("datos para el correo: ", obj_correo_a);


    document.getElementById("HD_enviar_accion").value = 1;
    //let url = JSON.parse(contacts);
    //return false;
    $.ajax({
        type: "POST",
        //url: url[0].url + "/generar_cita",
        url: "http://192.168.18.16/ws_erpflex/WS_login.asmx/generar_cita",
        async: false,
        data: "{obj_cab_a:" + JSON.stringify(obj_cab_a) + " ,obj_det_a:" + JSON.stringify(obj_det_a) + ",obj_correo_a:" + JSON.stringify(obj_correo_a) + "}",
        contentType: "application/json; charset=utf-8",
        jsonp: "callback",
        dataType: "json",
        crossDomain: true,
        crossOrigin: true,
        success: OnSuccessCall,
        error: OnErrorCall
    });

    function OnSuccessCall(response) {
 
        let mydata = JSON.parse(response.d);

        document.getElementById("HD_enviar_accion").value = "0";

        if (mydata[0] == "OK") {
            alert("LA CITA SE GENERO DE MANERA CORRECTA !");
            //cancelar();
            //citas();
        } else {
            //showErrorToast("ERROR GENERAR CITA " + mydata[0] + " | " + mydata[1])
            alert("ERROR GENERAR CITA " + mydata[0] + " | " + mydata[1]);
        };

    };

    function OnErrorCall(response) {
        alert("ERROR GENERAR CITA " + response.status + " " + response.statusText);
    };

}



function validacion_fecha(val_fecha_ingresada) {
    ////console.log("FECHA TAL CUAL: " + val_fecha_ingresada);
    //alert("ENTRA validacion_fecha(val_fecha_ingresada)");
    //VALIDAR FECHA MAYOR HOY
    var fecha_ingresada = val_fecha_ingresada;
    //console.log("SOLO FECHA: " + fecha_ingresada);

    let fecha = new Date().getTime();
    //try {
    //    let fe = moment(fecha).format("YYYY-MM-DD");
    //} catch (e) {
    //    alert(e)
    //}
    //alert(moment(fecha).format("YYYY-MM-DD"));
    let fecha_actual = moment(fecha).format("YYYY-MM-DD"); //moment(fecha).format("YYYY-MM-DD");

    let FechaUno = new Date(fecha_ingresada);
    FechaUno.setMinutes(FechaUno.getMinutes() + FechaUno.getTimezoneOffset())
    //FechaUno.setHours(00);
    //FechaUno.setMinutes(00);
    //FechaUno.setSeconds(00);

    let FechaDos = new Date(fecha_actual);
    FechaDos.setMinutes(FechaUno.getMinutes() + FechaDos.getTimezoneOffset())
    //FechaDos.setHours(00);
    //FechaDos.setMinutes(00);
    //FechaDos.setSeconds(00);

    //console.log("FECHA INGRESADA: " + (FechaUno) + "\nFECHA ACTUAL   : " + (FechaDos));
    ////console.log("FECHA INGRESADA: "+Date.parse(FechaUno)+"\nFECHA ACTUAL   : "+Date.parse(FechaDos));

    if (Date.parse(FechaDos) > Date.parse(FechaUno)) {
        $("#dt_dia_hora_cita").addClass("stiloError");
        alert("LA FECHA DEBE SER MAYOR O IGUAL A LA DE HOY");
        return false;
    } else {
        $("#dt_dia_hora_cita").removeClass("stiloError");

        ////console.log("FechaUno: " + FechaUno);
        let dia_cita = FechaUno.getDay();
        if (dia_cita == "0") {
            ////console.log("ES DOMINGO!");
            alert("LA FECHA DE LA CITA NO PUEDE SER DOMINGO!");
            $("#dt_dia_hora_cita").addClass("stiloError");
            return false;
        } else {
            $("#dt_dia_hora_cita").removeClass("stiloError");
        };

        var HD_hora_ingreso = document.getElementById("hd_hora_entrada").value;
        var HD_hora_salida = document.getElementById("hd_hora_salida").value;

        if (HD_hora_ingreso != "00:00" && HD_hora_salida != "00:00") {
            $("#txt_documento_profesional").removeClass("stiloError");
            $("#txt_profesional").removeClass("stiloError");

            let txt_hora_cita = document.getElementById("sl_hora_cita").value;
            //console.log("SOLO HORA: " + txt_hora_cita);

            let now = new Date();

            let hora_cita_D = new Date(now);//new Date(hora_actual);
            hora_cita_D.setHours(txt_hora_cita.split(":")[0]);
            hora_cita_D.setMinutes(txt_hora_cita.split(":")[1]);
            hora_cita_D.setSeconds("00");

            let hora_entrada_D = new Date(now);//new Date(hora_entrada_actual);
            hora_entrada_D.setHours(HD_hora_ingreso.split(":")[0]);
            hora_entrada_D.setMinutes(HD_hora_ingreso.split(":")[1]);
            hora_entrada_D.setSeconds("00");

            let hora_salida_D = new Date(now);//new Date(hora_salida_actual);
            hora_salida_D.setHours(HD_hora_salida.split(":")[0]);
            hora_salida_D.setMinutes(HD_hora_salida.split(":")[1]);
            hora_salida_D.setSeconds("00");

            //console.log("hora_entrada_D: " + hora_entrada_D);
            //console.log("hora_salida_D: " + hora_salida_D);
            //console.log("hora_cita_D: " + hora_cita_D);
            if (hora_cita_D >= hora_entrada_D && hora_cita_D < hora_salida_D) {
                //let now_1 = new Date();
                //let FECHA_ACTUAL_DATE = new Date(now_1);
                let fecha_hora_actual = Date.now();

                FechaUno.setHours(txt_hora_cita.split(":")[0]);
                FechaUno.setMinutes(txt_hora_cita.split(":")[1]);
                FechaUno.setSeconds("00")
                ////console.log("FechaUno: " + FechaUno);

                let hora_cita_D_date = Date.parse(FechaUno);

                ////console.log("hora_cita_D: " + hora_cita_D);
                ////console.log("hora_cita_D_date: " + hora_cita_D_date);
                ////console.log("FECHA_ACTUAL_DATE: " + FECHA_ACTUAL_DATE);
                ////console.log("fecha_hora_actual: " + fecha_hora_actual);

                if (hora_cita_D_date <= fecha_hora_actual) {
                    alert("LA HORA DE LA CITA DEBE SER MAYOR A LA HORA ACTUAL!");
                    $("#txt_hora_cita").addClass("stiloError");
                    return false;
                } else {
                    $("#txt_hora_cita").removeClass("stiloError");
                };
                //return false;

                //VALIDAR SI YA EXISTE UNA CITA 
                let hd_persona_profesional = document.getElementById("hd_persona_profesional").value;
                var count_citas = "-1";
                var mydata;

                //console.log("ESTA DENTRO DEL RANGO DE ATENCION");
                ////console.log("txt_hora_cita: " + txt_hora_cita);
                ////console.log("fecha_ingresada: " + fecha_ingresada);
                ////console.log("hd_persona_profesional: " + hd_persona_profesional);

                //return false;
                var url_ws = JSON.parse(contacts);
                var url_ws_f = url_ws[0].url;

                $.ajax({
                    type: "POST",
                    url: url_ws_f + "validar_cita",
                    async: false,
                    data: "{fecha_ingresada:" + JSON.stringify(fecha_ingresada) + " ,txt_hora_cita:" + JSON.stringify(txt_hora_cita) + " ,Vc_IdProfesional:" + JSON.stringify(hd_persona_profesional) + "}",
                    contentType: "application/json; charset=utf-8",
                    jsonp: "callback",
                    dataType: "json",
                    crossDomain: true,
                    crossOrigin: true,
                    success: OnSuccessCall,
                    error: OnErrorCall
                });
                function OnSuccessCall(response) {
                    mydata = JSON.parse(response.d)
                    ////console.log("MYDATA \n", mydata);                            
                };
                function OnErrorCall(response) {
                    alert("ERROR VALIDAR CITA " + response.status + " " + response.statusText);
                    return false;
                };

                if (mydata[0] != "E") {
                    count_citas = mydata[1];
                    ////console.log("count_citas: " + count_citas);
                    if (count_citas == "0") {
                        return true;
                    } else {
                        alert("YA EXISTE UNA CITA REGISTRADA A ESA HORA, PORFAVOR SELECCIONE OTRA HORA");
                        return false;
                    };
                } else {
                    showErrorToast("ERROR VALIDAR CITA EN EL MISMO HORARIO " + mydata[1]);
                    return false;
                };
                //return false;
            } else {
                $("#txt_hora_cita").addClass("stiloError");
                alert("LA HORA SELECCIONADA SE ENCUENTRA FUERA DEL RANGO DE ATENCION");
                return false;
            };
            //let hora_cita = Date.parse(hora_cita_D);
            //let hora_entrada = Date.parse(hora_entrada_D);
            //let hora_salida = Date.parse(hora_salida_D);
            ////console.log("hora_cita: " + hora_cita);
            ////console.log("hora_entrada: " + hora_entrada);
            ////console.log("hora_salida: " + hora_salida);
        } else {
            $("#txt_documento_profesional").addClass("stiloError");
            $("#txt_profesional").addClass("stiloError");
            alert("EL PROFESIONAL SELECCIONADO NO CUENTA CON UN HORARIO DE ATENCION DISPONIBLE");
            return false;
        };

        //return true;
    };
};    