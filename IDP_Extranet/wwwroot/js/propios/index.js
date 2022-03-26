//$(document).ready(function () {

//});


document.addEventListener('DOMContentLoaded', function () {
    console.log('document is ready. I can sleep now');

    //#region Funcion para manejar menu gestion
    console.log("hola 2");
    gestion();

    //#endregion

    //*******************************************************
    //#region obtener parametros de otra pagina

    //document.getElementById("hd_ruta_validar").value = getUrlParameter('validar');

    //#endregion
});

//#region ************************************** INICIO **** FUNCION PARA GESTIONAR LA PAGINA *******************************************
function gestion(params) {
    console.log("se cargo la funcion gestion...");     

    $(function () {

        $('.btn-specialty').on('click', function () {
            var especialidad = $(this).data('specialty');
            $('.btn-specialty').removeClass('active');
            $(this).addClass('active');
            $('#hd_especialidad').val(especialidad);
        });
    });
}

//#endregion *********************************** FIIIIN **** FUNCION PARA GESTIONAR LA PAGINA *******************************************


function continuar(params) {

    
    var especialidad = $("#hd_especialidad").val();

    console.log("especialidad: " + especialidad);
    // console.log("especialidad1: " + especialidad1);
    // console.log("especialidad2: " + especialidad2);
    
    ////https://atuladosalud.com/paso-3/?pais=peru&especialidad=psicologo&modalidad=online&grupo=adolescentes
    //if(especialidad==""){
    //    alert("Por favor Seleccionar la especialidad");
    //}else{
    //    window.location.href = "./paso2.html?especialidad=" + especialidad;  
    //}

    
}

  
