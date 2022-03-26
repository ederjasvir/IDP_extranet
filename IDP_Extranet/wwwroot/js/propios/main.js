 //(function($) {

	"use strict";


document.addEventListener('DOMContentLoaded', function () {
    //#region Funcion para manejar menu gestion
    //console.log("hola paso2");
    gestion();
    //#endregion
    
});
 
var curr_date, events;
 
function gestion() {
   //console.log("holaaaaaaaaaaaaaaaaaaaaaa");
    var especialidad = document.getElementById("hd_especialidad").value;
    var modalidad= document.getElementById("hd_tipo").value;
    var grupo = document.getElementById("hd_grupo").value;
   
    $("#sel_especialidad").val(especialidad).change();
    $("#sel_tipo").val(modalidad).change();
    $("#sel_grupo").val(grupo).change();


    var date = new Date();
    var today = date.getDate();
    // Set click handlers for DOM elements
    $(".right-button").click({ date: date }, next_year);
    $(".left-button").click({ date: date }, prev_year);
    $(".month").click({ date: date }, month_click);
    $("#add-button").click({ date: date }, new_event);
    // Set current month as active
    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    

    init_calendar(date);
    var events = check_events(today, date.getMonth() + 1, date.getFullYear());
    show_events(events, months[date.getMonth()], today);

    
    //UpdateUserDetail();
}


var detalle;


//function UpdateUserDetail() {
//    //var usersJson = GetSampleUsersList();
//    //var getReportColumnsParams = {
//    //    "usersJson": usersJson
//    //};

//    $.ajax({
//        type: "POST",
//        url: '/Home/ver_horario',
//        //data: "{}",
//       //data: "{in_anyo:" + JSON.stringify(in_anyo) + ",in_periodo:" + JSON.stringify(in_periodo) + "}",
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: OnSuccessCall_datos_horario,
//        error: OnErrorCall_datos_horario
//    });

//    function OnSuccessCall_datos_horario(response) {
//        let datos_citas = response;//JSON.parse(response.d);
//        //console.log("datoooooos: ", mydata);
//        //obtener_horario(mydata);

//        //detalle = mydata;
//        cargar_detalle(datos_citas);

//    }

//    function OnErrorCall_datos_horario(response) {
//        alert(response.status + " " + response.statusText);
//    }
 
//}

 
 
//function GetSampleUsersList() {
//    var userDetails = {};
//    var usersList = [];
//    for (var i = 1; i <= 3; i++) {
//        userDetails["UserId"] = i;
//        userDetails["UserName"] = "User- " + i;
//        userDetails["Company"] = "Company- " + i;
//        usersList.push(userDetails);
//    }

//    //console.log("usersListttttttttttt: ", usersList);
//    return JSON.stringify(usersList);
//}  




var class_events_container = document.querySelector('.events-container').id;
//console.log("class_events_containerrrrrrrrr: " + class_events_container);
//var died = document.getElementsByClassName("events-container").length;
//console.log("dieddddddddddddddd: " + died);


// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
    $(".tbody").empty();
    $("#" + class_events_container).empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
    for(var i=0; i<35+first_day; i++) {
        // Since some of the elements will be blank, 
        // need to calculate actual date from index
        var day = i-first_day+1;
        // If it is a sunday, make a new row
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        // if current index isn't a day in this month, make it blank
        if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            curr_date = $("<td class='table-date'>"+day+"</td>");
            events = check_events(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("active-date");
                show_events(events, months[month], day);
            }
            // If this date has any events, style it with .event-date
            if(events.length!==0) {
                curr_date.addClass("event-date");
            }

            
            // Set onClick handler for clicking a date
            curr_date.click({events: events, month: months[month], day:day}, date_click);
            row.append(curr_date);
        }
    }
    // Append the last row and set the current year
    calendar_days.append(row);
    $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
}

// Event handler for when a date is clicked
function date_click(event) { 
    console.log(this);
    console.log(event);
    //console.log(id);
    var id_calendario = document.querySelector('.dates-table').id;
    //alert("ID_CALENTDARIO: " + id_calendario);
    $("#" + class_events_container).show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");

    let ID = class_events_container;
    console.log("ID: " + class_events_container);

    show_events(event.data.events, event.data.month, event.data.day);
};

// Event handler for when a month is clicked
function month_click(event) {
    $("#" + class_events_container).show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for clicking the new event button
function new_event(event) {

    
    // if a date isn't selected then do nothing
    if($(".active-date").length===0)
        return;
    // remove red error input on click
    $("input").click(function () {
        $(this).removeClass("error-input");
    });
    // empty inputs and hide events
    $("#dialog input[type=text]").val('');
    $("#dialog input[type=number]").val('');
    $("#" + class_events_container).hide(250);
    $("#dialog").show(250);
    // Event handler for cancel button
    $("#cancel-button").click(function() {
        $("#name").removeClass("error-input");
        $("#count").removeClass("error-input");
        $("#dialog").hide(250);
        $("#" + class_events_container).show(250);
    });
    // Event handler for ok button
    $("#ok-button").unbind().click({date: event.data.date}, function() {
        var date = event.data.date;
        var name = $("#name").val().trim();
        var count = parseInt($("#count").val().trim());
        var day = parseInt($(".active-date").html());
        // Basic form validation
        if(name.length === 0) {
            $("#name").addClass("error-input");
        }
        else if(isNaN(count)) {
            $("#count").addClass("error-input");
        }
        else {
            $("#dialog").hide(250);
            //console.log("new event");
            new_event_json(name, count, date, day);
            date.setDate(day);
            init_calendar(date);
        }
    });
}

// Adds a json event to event_data
function new_event_json(name, count, date, day) {
     
    var event = {
        "occasion": name,
        "invited_count": count,
        "year": date.getFullYear(),
        "month": date.getMonth()+1,
        "day": day
    };
    event_data["events"].push(event);
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
 
    var died = document.getElementsByClassName("events-container").length;
    var cantidad = $("#total_registros").val();
    var total_filas = parseInt(cantidad) + 1;
    console.log("events:\n ", events);
    console.log("month:\n ", month);
    console.log("day:\n ", day);


    
    //var demo24 = lista_datatable_a;
    //console.log("demooooooooo: ", demo24);
    //console.log("aressss eventos");
    //var car_evento_13 = document.getElementById("car_evento_0");
    //car_evento_13.innerHTML = `holaaaa`;

    //var car_evento_14 = document.getElementById("car_evento_1");
    //car_evento_14.innerHTML = `mundoooooooo`;
 
    //for (var i = 0; i < total_filas; i++) {
    //    var tabla_calen = $("#tabla_calen_" + i).val();
    //    var car_evento_13 = document.getElementById("car_evento_" + i);
    //    car_evento_13.innerHTML = ` 
    //            <div class="event-card table-responsive" >
    //                <div class="event-name" id="div_datos_${i}">
    //                    <table class="table table-sm table-hover">
    //                        <thead id="tbl_cab_${i}">
    //                        </thead>
    //                        <tbody id="tbl_det_${i}">
    //                        </tbody>
    //                      </table> 
    //                </div>
    //            </div>


    //        `;


    };

    //console.log("tabla_calen: " + tabla_calen);
    //obtener_datos(month, day, i);
    //for (var i = 0; i < cantidad; i++) {

    //    //var car_evento_13 = document.getElementById("car_evento_" + i);

    //    var div_datos = "div_datos_" + i;
    //    var tbl_cab = "tbl_cab_" + i;
    //    var tbl_det = "tbl_det_" + i;

    //    var event_card = $("<div class='event-card table-responsive'></div>");
    //    var event_name = $("<div class='event-name' id='" + div_datos + "'><table class='table table-sm table-hover'><thead id='" + tbl_cab +"'></thead><tbody id='"+tbl_det+"'></tbody></table> </div>");
    //    $(event_card).css({ "border-left": "10px solid #FF1744" });
    //    $(event_card).append(event_name);
    //    $("#" + class_events_container).append(event_card);
    //    obtener_datos(month, day, i);

    //    //break
    //}

        //obtener_datos(month, day,i);
    //}

function obtener_datos(month, day, i) {

    //var id_empleado1 = id_empleado;

    console.log("diaaaaa:" + day + "*** mes: " + month + " *** year: 2022" + " ***** iiiiiiii:" + i);

    //console.log("ddddddd: " + month);
    //$.ajax({
    //    type: "POST",
    //    traditional: true,
    //    async: false,
    //    cache: false,
    //    url: '/Home/ver_horario',
    //    context: document.body,
    //    //data: getReportColumnsParams,
    //    success: function (result) {
    //        //console.log("resulttttttttttttttt: ", result);
    //        var lista1 = new Array();



    //        var mes = month;
    //        var dia = day;
    //        var hora1 = 9;


    //        var tbl_cab1 = "tbl_cab_" + i;
    //        var tbl_det1 = "tbl_det_" + i;
    //        var tbl_cab = document.getElementById(tbl_cab1);
    //        var tbl_det = document.getElementById(tbl_det1);

             
    //        for (var j in result) {
    //            var id_profesional = result[j].vc_IdProfesional;
    //            var nombre = result[j].nombreCompleto;
    //            var fecha = formatear_fecha2(result[j].dt_FechaCreacion);
    //            var hora12 = formatear_hora_am_pm(result[j].dt_FechaCreacion);
    //            //console.log("NombreCompletooooooo: " + ares + " **** fecha: " + fecha + " *** index: " + j);


    //            for (let index = 0; index < j; index++) {


    //                var hora = hora1 + index;
    //                var minutos1 = "00" + index;
    //                var minutos = 0;

    //                //console.log("horaaaa: " + hora);
    //                if (minutos < 10) {

    //                    minutos = "0" + minutos1;
    //                } else {

    //                    minutos = minutos1;
    //                }

    //                var continuar = `<button type="sumit" class="btn btn-primary mr-2" onclick="pasarela(${index},${id_profesional},${fecha})">Continuar</button>`;
    //                tbl_det.innerHTML += `
    //                    <tr>
    //                        <td>${mes}</td>

    //                        <td>${hora12} </td>
    //                        <td>${continuar} </td>
    //                    </tr>

    //                    `;
    //                continue
    //            }

    //            break


    //        };
  
    //    },
    //    error: function (xhr) {
    //        //debugger;  
    //        console.log(xhr.responseText);
    //        alert("Error has occurred..");
    //    }
    //});


}



    
 

// Checks if a specific date has any events
function check_events(day, month, year) {
    var events = [];
    for(var i=0; i<event_data["events"].length; i++) {
        var event = event_data["events"][i];
        if(event["day"]===day &&
            event["month"]===month &&
            event["year"]===year) {
                events.push(event);
            }
    }
    return events;
}

// Given data for events in JSON format
var event_data = {
    "events": [
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2022,
        "month": 3,
        "day": 26,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
    },
    {
        "occasion": " Test Event",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 11
    }
    ]
};

const months = [ 
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Setiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre" 
];

//})(jQuery);
 




//function obtener_datos(month, day,i) {
//    //console.log("datos de la fechaaaaaa " + " ***meees: " + month +" ***dia: "+ day);
//    var mes = month;
//    var dia = day;
//    var hora1 = 9;
    
//    var horario = UpdateUserDetail();
//    console.log("horarioooooooo: ", horario);

//    var tbl_cab1 = "tbl_cab_" + i;
//    var tbl_det1 = "tbl_det_" + i;
//    var tbl_cab = document.getElementById(tbl_cab1);
//    var tbl_det = document.getElementById(tbl_det1);

//    //console.log("tbl_cabbbb: ", tbl_cab);
//    //console.log("tbl_detffff: " , tbl_det);

//    tbl_cab.innerHTML=`
//    <b>Dia</b>: ${dia}
//        <tr>
//            <th scope="col">Mes</th>
            
//            <th scope="col">Hora</th>
//            <th scope="col">-</th>
//        </tr>  
//     `;
     

//    for (let index = 0; index < 5; index++) {
        
        
//        var hora = hora1 + index;
//        var minutos1 = "00" + index;
//        var minutos=0;
        
//        //console.log("horaaaa: " + hora);
//        if(minutos <10){

//            minutos = "0" +minutos1;
//        }else{

//            minutos = minutos1;
//        }

//        var continuar = `<button type="sumit" class="btn btn-primary mr-2" onclick="pasarela(${index})">Continuar</button>`;
//        tbl_det.innerHTML +=`
//        <tr>
//            <td>${mes}</td>
            
//            <td>${hora}:${minutos} </td>
//            <td>${continuar} </td>
//        </tr>
        
//        `;
        
//    }
 

//};


function pasarela(index, id_profesional,fecha) {
    console.log("id_profesionaaaal: " + id_profesional);
    console.log("fechaaaaaaaa: " + fecha);
    //var id = $("#hd_cod").val(index);
      window.location.href = "pasarela?id=" + index + "&id_profesional=" + id_profesional;

    //pasarela ? id = 14
}



//#region ******************************* FUNCIONES AUXILIARES **** INICIO ***************************
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



//************************************** HORA **** INICIO *****************************
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

//************************************** HORA **** FIIIIN *****************************





function formatear_hora(hora24) {


    var dt_hora = new Date(hora24);
    //console.log("hora para formatear: " + dt_hora);
    var minutos = parseInt(dt_hora.getMinutes());

    var hora = dt_hora.getHours() + ':' + minutos;
    console.log("horaa formateadaaaaasasdcxxx: " + hora);
    console.log("minutooooooooooooos: " + dt_hora.getMinutes());
    return hora;
}

//#endregion **************************** FUNCIONES AUXILIARES **** FIIIIN ***************************