using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IDP_Extranet.Models
{
    public class ClsCitas
    {

        public string Vc_IdCita { get; set; }
        public string Vc_IdProfesional { get; set; }
        public string NombreCompleto { get; set; }
        public DateTime Dt_FechaCreacion { get; set; }
        public DateTime Dt_FechaCita { get; set; }
        
        public string Vc_Estado { get; set; }

    }
}
