using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IDP_Extranet.CustomValidation
{
    public class ContrasenaValidate : Attribute, IModelValidator//Acceder a la interfaz IModelValidator

    {

        public string ErrorMessage { get; set; }

        /// <summary>

        /// Función para la retornar validación - función con inyección de dependencia

        /// </summary>

        /// <param name="context"></param>

        /// <returns></returns>

        public IEnumerable<ModelValidationResult> Validate(ModelValidationContext context)

        {

            return new List<ModelValidationResult>

                {

                    new ModelValidationResult("", ErrorMessage)

                };

        }

    }
}
