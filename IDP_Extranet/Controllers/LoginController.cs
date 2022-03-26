using System;
using System.Collections.Generic;
using System.Data;//Identificar el tipo de objeto a manipular en base de datos
using Microsoft.Data.SqlClient;//Controlador de acceso a datos
using System.Linq;//Para hacer macth entre lista del dataReader y los antributos del modelo (usuario y contrasena)
using IDP_Extranet.Models;//Para instanciar los atributos de la entidad usuario
using Microsoft.Extensions.Configuration;//Para acceder al archivo de configuración appsettings.json
using System.Threading.Tasks; //crea una tarea asincrónica a nivel de sistema en C#. El programador de tareas ejecuta las tareas creadas con la clase Task
using Microsoft.AspNetCore.Http;//Para el manejo de solicitudes y respuestas HTTP
using Microsoft.AspNetCore.Mvc; //Proporciona los tipos necesarios para compilar una aplicación MVC 




namespace IDP_Extranet.Controllers
     
{
    
    public class LoginController : Controller
    {
        // <summary>
        /// Constante para Inicializar la Sesión _User
        /// </summary>
        const string SessionUser = "_User";

        public IConfiguration Configuration { get; }
        /// <summary>
        /// Interfaz para acceder a los valores del archivo de configuración
        /// </summary>
        /// <param name="configuration"></param> 

        public LoginController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        //public ActionResult Login(string returnUrl)
        /// <summary>
        /// Action para inicializar la carga de la vista del Login en base a los atributos de modelo usuario
        /// </summary>
        /// <returns></returns>

        //public IActionResult Index()
        //{
        //    return View(new ClsUsuario());
        //}
        //contraseña encriptada de usuario erp
        //2468:<>@                                                                                            

       
        public ActionResult Login()
        {
            //ViewBag.ReturnUrl = returnUrl;
            return View(new ClsUsuario());
        }
        /// <summary>
        /// Action de tipo POST para  para inicializar el proceso de validación e iniciar sessión en  base a los datos del modelo
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Login(ClsUsuario model)
        {
            //Conexión a la base de datos
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //Estoy usando uso de ADO.Net para interactuar con la base de datos
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                var list_users = new List<ClsUsuario>();
                //@1Inicio: Validar los controladores
                if (model.Usuario == null || model.Usuario.Equals("") ||
                    model.Clave == null || model.Clave.Equals(""))
                {
                    ModelState.AddModelError("", "Ingresar los datos solictiados");
                }//@1Final
                else
                {

                    //USP_COUNT_USUARIO_LOGIN(Txt_Usuario1.Text, desec.Encriptar(Txt_Password1.Text))
                    connection.Open();//Abrir la conexión a la base de datos
                    SqlCommand com = new SqlCommand("USP_COUNT_USUARIO_LOGIN", connection);//Referencia al procedimiento almacenado
                    com.CommandType = CommandType.StoredProcedure;//Se define el tipo de comando a utilizar
                    //Paso los parámetros de acuerdo a los datos cargados segun el modelo usario
                    com.Parameters.AddWithValue("@Usuario", model.Usuario);
                    com.Parameters.AddWithValue("@Clave", model.Clave);
                    Int32 count = (Int32)com.ExecuteScalar(); // esto se ejecuta cuando el store te devuelve un dato en este caso un nro.
                    //SqlDataReader dr = com.ExecuteReader();//Ejecuto el comando a través de un DataReader
                    //@2Inicio: Recorro los datos y adiciono en la lista list_users los valores usuario y contrasena
                    //while (dr.Read())
                    //{
                    //    ClsUsuario clsUsuario = new ClsUsuario();
                    //    clsUsuario.Usuario = Convert.ToString(dr["Usuario"]);
                    //    clsUsuario.Clave = Convert.ToString(dr["Clave"]);

                    //    list_users.Add(clsUsuario);//Adicionar en la lista
                    //}
                    //@2Final 

                    //@3Inicio: Match entre los valores ingresados y la lista
                    //if (list_users.Any(p => p.Usuario == model.Usuario && p.Clave == model.Clave))
                    if(count >0) // aqui se valida si es que hay el usuario o no
                    {
                        //var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, model.usuario), });
                        HttpContext.Session.SetString(SessionUser, model.Usuario);//Iniciamos la sesión pasando el valor (nombre del usuario)

                        return RedirectToAction("Index", "Home");//Redireccionar a la vista usario (Lista de Usuarios)
                    }
                    else
                    {
                        ModelState.AddModelError("", "Datos ingresado no válido.");//Error personalizado
                    }
                }
                return View(model);
            }
        }

        /// <summary>
        /// Action para limpiar y cerrar la sesión de la aplicación
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            HttpContext.Session.Clear();//Limpiar la sesión
            return RedirectToAction("Login", "Login");//Redireccionar a la vista login
        }

    }
}