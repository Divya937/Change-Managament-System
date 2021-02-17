using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ChangeManagement_MVC.Models
{
    public class Login
    {
        [Required(ErrorMessage = "*")]
        [Display(Name = "USERNAME")]
        [MaxLength(20)]
        [MinLength(8, ErrorMessage = "Username should be of atleast 8 characters")]
        public string username { get; set; }

        [Required(ErrorMessage = "*")]
        [Display(Name = "PASSWORD")]
        [DataType(DataType.Password)]
        [MinLength(10, ErrorMessage = "Password should be of atleast 10 characters")]
        [RegularExpression("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", ErrorMessage = "Adhere to the Password policy")]
        public string password { get; set; }
    }

    public class Register : Loginmaster { }
}