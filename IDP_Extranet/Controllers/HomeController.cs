using System;
using System.Web;
using System.Collections.Generic;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using IDP_Extranet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace IDP_Extranet.Controllers
{


    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public IConfiguration Configuration { get; }

        public HomeController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}


        public IActionResult Usuario()
        {
            return View();
        }


        // GET: /<controller>/
        public IActionResult Index()
        {
            List<ClsUsuario> UsuariosList = new List<ClsUsuario>();

            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();

                string sql = "select Usuario,Clave from GL_Usuario";
                SqlCommand command = new SqlCommand(sql, connection);

                using (SqlDataReader dataReader = command.ExecuteReader())
                {
                    while (dataReader.Read())
                    {
                        ClsUsuario clsUsuario = new ClsUsuario();
                        //clsUsuario.id = Convert.ToInt32(dataReader["Id"]);
                        clsUsuario.Usuario = Convert.ToString(dataReader["Usuario"]);
                        clsUsuario.Clave = Convert.ToString(dataReader["Clave"]);
                        //clsUsuario.intentos = Convert.ToInt32(dataReader["Intentos"]);
                        //clsUsuario.nivelSeg = Convert.ToDecimal(dataReader["NivelSeg"]);
                        //clsUsuario.fechaReg = Convert.ToDateTime(dataReader["FechaReg"]);

                        UsuariosList.Add(clsUsuario);
                    }
                }

                connection.Close();
            }
            return View(UsuariosList);
        }


        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        //public IActionResult Paso2(string especialidad,string hd_especialidad)
        public IActionResult Paso2(string hd_especialidad) // para enviar un parametro a otra vista con un hidden
        {
            //ViewBag.especialidad = especialidad;
            ViewBag.hd_especialidad = hd_especialidad;
            return View();
            //ClsEspecialidad especialidad = new ClsEspecialidad()
            //{
            //    especialidad = "Toilet Paper",
            //    estado = "activo"
            //};
            //return View(especialidad);
        }




        //[HttpPost]
        public IActionResult paso3(string hd_especialidad, string hd_tipo, string hd_grupo)
        {

            ViewBag.hd_especialidad = hd_especialidad;
            ViewBag.hd_tipo = hd_tipo;
            ViewBag.hd_grupo = hd_grupo;
           

            // obtener y listar profesionales
            List<ClsVW_profesional> ProfesionalList = new List<ClsVW_profesional>();
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();

                string sql = "select Vc_IdEmpleado,NombreCompleto,NombreImagen,RutaImagen from VW_profesional";
                SqlCommand command = new SqlCommand(sql, connection);
                using (SqlDataReader dataReader = command.ExecuteReader())
                {
                    while (dataReader.Read())
                    {
                        ClsVW_profesional Cls_profesional = new ClsVW_profesional();
                        Cls_profesional.Vc_IdEmpleado = Convert.ToString(dataReader["Vc_IdEmpleado"]);
                        Cls_profesional.NombreCompleto = Convert.ToString(dataReader["NombreCompleto"]);
                        Cls_profesional.NombreImagen = Convert.ToString(dataReader["NombreImagen"]);
                        Cls_profesional.RutaImagen = $"{Directory.GetCurrentDirectory()}{@"\images\img\team\"}";//Convert.ToString(dataReader["RutaImagen"]);
 
                        ProfesionalList.Add(Cls_profesional);
                    }
                }

                connection.Close();

            }

            
            return View(ProfesionalList);
        }

        //editar desde tabla profesional

        public IActionResult Pasarela()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }



        //************************************ LISTAR HORARIO PROFESIONAL **** INICIO **********************************
        public ActionResult ver_horario() {

            // obtener y listar profesionales
            List<ClsCitas> CitaslList = new List<ClsCitas>();
            string connectionString1 = Configuration["ConnectionStrings:DefaultConnection"];
            using (SqlConnection connection1 = new SqlConnection(connectionString1))
            {
                

                connection1.Open();

                string sql = "select Vc_IdProfesional,NombreCompleto,Dt_FechaCreacion,Dt_FechaCita from vw_horario_profesional";
                SqlCommand command1 = new SqlCommand(sql, connection1);
                using (SqlDataReader dataReader1 = command1.ExecuteReader())
                {
                    while (dataReader1.Read())
                    {
                        ClsCitas Cls_citas = new ClsCitas();
                        
                        Cls_citas.Vc_IdProfesional = Convert.ToString(dataReader1["Vc_IdProfesional"]);
                        Cls_citas.NombreCompleto = Convert.ToString(dataReader1["NombreCompleto"]);
                       Cls_citas.Dt_FechaCita = Convert.ToDateTime(dataReader1["Dt_FechaCita"]);
                        


                        CitaslList.Add(Cls_citas);
                    }
                }

                connection1.Close();

            }

            return Json(CitaslList);
            //return View(CitaslList);
        }




        //************************************ LISTAR HORARIO PROFESIONAL **** FIIIIN **********************************

        //************************************ crear cita ****  INICIO *************************************************
        public IActionResult Create()
        {
            return View();
        }

         
        [HttpPost]
        public IActionResult pasarela(ClsBE_Citas_Programadas citas)
        {
            if (ModelState.IsValid)
            {
                string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    string sql = $"Insert Into BE_Citas_Programadas(in_persona, vc_nombre_completo, in_nro_operacion) Values('{citas.in_persona}', '{citas.vc_nombre_completo}', '{citas.in_nro_operacion}')";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        command.CommandType = CommandType.Text;

                        connection.Open();
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                    return RedirectToAction("Index");
                }
            }
            else
                return View();
        }


        //************************************ crear cita ****  FIIIIN *****************
   

       



        public IActionResult ver_imagen()
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            string path = "";
            path = Path.Combine(webRootPath, "images/img/team/team-3.jpg");
            //or path = Path.Combine(contentRootPath , "wwwroot" ,"CSS" );
            return View("paso3");

            //return Content(path + "\n");
        }

         

        //**************************************************************



        //********************************************** para ver imagene de un directorio fisico *************************


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
             
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
