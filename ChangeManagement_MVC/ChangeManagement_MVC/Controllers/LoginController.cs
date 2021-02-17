using ChangeManagement_MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ChangeManagement_MVC.Controllers
{
    [RoutePrefix("Api/Login/")]
    public class LoginController : ApiController
    {
        //For user login   
        [Route("UserLogin")]
        [HttpPost]
        public Response Login(Login Lg)
        {
            ChangeLogSystemEntities DB = new ChangeLogSystemEntities();
            var Obj = DB.Usp_Login(Lg.username,Lg.password).ToList<Usp_Login_Result>().FirstOrDefault();
            if (Obj == null)
                return new Response { Status = "Invalid", Message = "Invalid User." };
            else
                return new Response { Status = "Success", Message = Lg.username };
        }

        //For new user Registration  
        [Route("RegisterUser")]
        [HttpPost]
        public object CreateUser(Register Lvm)
        {
            try
            {
                ChangeLogSystemEntities db = new ChangeLogSystemEntities();
                Loginmaster login = new Loginmaster();
                if (login.UserId == 0)
                {
                    login.UserName = Lvm.UserName;
                    login.LoginName = Lvm.LoginName;
                    login.Password = Lvm.Password;
                    login.Email = Lvm.Email;
                    login.ContactNo = Lvm.ContactNo;
                    db.Loginmasters.Add(login);
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }
}
