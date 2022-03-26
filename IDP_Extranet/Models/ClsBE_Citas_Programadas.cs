using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IDP_Extranet.Models
{
    public class ClsBE_Citas_Programadas
    {
 


        public int in_id_visita { get; set; }
        //---datos persona
        public int in_persona { get; set; }
        public string vc_nombre_completo { get; set; }
        //---datos paciente: 
        public string vc_paciente { get; set; }
        public int in_edad_paciente { get; set; }
        public string vc_especialidad { get; set; }
        public int in_especialista { get; set; }
        public string vc_especialista { get; set; }
        public string vc_modalidad { get; set; }
        public DateTime dt_fecha_cita { get; set; }
        public DateTime dt_hora_cita { get; set; }
        public decimal dc_costo { get; set; }
        public int in_nro_operacion { get; set; }
        public DateTime dt_fecha_pago { get; set; }
        public DateTime dt_fecha_creacion { get; set; }

    }
}
