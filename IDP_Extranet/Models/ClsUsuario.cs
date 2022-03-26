using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using IDP_Extranet.CustomValidation;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IDP_Extranet.Models
{
    public class ClsUsuario : Controller
    {

        //  public int id { get; set; }  
        [Required]
        public string Usuario { get; set; }

        public string UsuarioPerfil { get; set; }
        public string Nombre { get; set; }

        [Required]
        [ContrasenaValidate(ErrorMessage = "Contraseña no valida")]
        public string Clave { get; set; }
        public string ExpirarPasswordFlag { get; set; }
        public DateTime FechaExpiracion { get; set; }
        public DateTime UltimoLogin { get; set; }
        public int NumeroLoginsDisponible { get; set; }
        public int NumeroLoginsUsados { get; set; }
        public string SQLLogin { get; set; }
        public string SQLPassword { get; set; }
        public string Estado { get; set; }
        public string UltimoUsuario { get; set; }
        public DateTime UltimaFechaModif { get; set; }
        public string UsuarioRed { get; set; }
        public string vc_idCompany { get; set; }
        public string Color { get; set; }
        public string vc_clave_aprobacion { get; set; }


        ////**** lo que funciona con el ejemplo del tutorial
        //public int id { get; set; }
        //[Required]
        //public string usuario { get; set; }
        //[Required]
        //[ContrasenaValidate(ErrorMessage = "Contraseña no valida")]
        //public string contrasena { get; set; }
        //[Range(3, 5)]
        //public int intentos { get; set; }
        //[Required]
        //public decimal nivelSeg { get; set; }
        //public DateTime fechaReg { get; set; }
    }
}
//}
