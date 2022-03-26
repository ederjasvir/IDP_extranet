//$(document).ready(function () {
//});



document.addEventListener('DOMContentLoaded', function () {
    //console.log('document is ready. I can sleep now');
    //const queryString = window.location.search;
    //console.log("urllllll: " + queryString);
    ////#region obtener parametros de otra pagina

    //document.getElementById("hd_especialidad").value = urlParams.get('especialidad');//getUrlParameter('especialidad');

    //#endregion

    //#region Funcion para manejar menu gestion
    console.log("hola 2 se cargo el paso 2");
    gestion();

    //#endregion

    //*******************************************************
    //#region obtener parametros de otra pagina

    //document.getElementById("hd_ruta_validar").value = getUrlParameter('validar');

    //#endregion
});
 


//#region ****************** OBTENER PARAMETROS DE OTRA PAGINA **** FUNCIONES CSS PARA ALERTAS DE NOTIFICACION (ALERTAS TOARS)  *******************


//var getUrlParameter = function getUrlParameter(sParam) {
//    var sPageURL = window.location.search.substring(1),
//        sURLVariables = sPageURL.split('&'),
//        sParameterName,
//        i;

//    for (i = 0; i < sURLVariables.length; i++) {
//        sParameterName = sURLVariables[i].split('=');

//        if (sParameterName[0] === sParam) {
//            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//        }
//    }
//};
//#endregion ************************************************  OBTENER PARAMETROS DE OTRA PAGINA *** FIIIIN ************************************************

function gestion() {
    console.log("holaaaaaaaaaaaaaaaaaaaaaa paso 2");

    //*******************************************************

    $(function () {
        $('.btn-type').on('click', function () {
            var type = $(this).data('type');
            $("#hd_tipo").val(type);

            $('.btn-type').removeClass('active');
            $(this).addClass('active');
            $('#modalidad').val(type);
        });
        $('.btn-group').on('click', function () {
            var group = $(this).data('group');
            $("#hd_grupo").val(group);
            $('.btn-group').removeClass('active');
            $(this).addClass('active');
            $('#grupo').val(group);
        });
    });


}

 

function continuar() {
     
    var especialidad = $("#hd_especialidad").val();
    console.log("especialidaaaaaaaaaaaaaaaaaaaaaaaad: " + especialidad);
    var modalidad = $("#hd_tipo").val();
    var grupo = $("#hd_grupo").val();

    
    //if ((modalidad == "") || (grupo=="")) {
    //    alert("Por favor, seleccione un tipo de consulta y un tipo de paciente.");
    //} else {
    //    window.location.href = "./paso3.html?&especialidad=" + especialidad + "&modalidad=" + modalidad + "&grupo=" + grupo; 
    //}

    
}