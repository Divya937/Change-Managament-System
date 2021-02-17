using ChangeManagement_MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ChangeManagement_MVC.Controllers
{
    [RoutePrefix("Api/Update/")]
    public class UpdateController : ApiController
    {
        ChangeLogSystemEntities1 objEntity = new ChangeLogSystemEntities1();
        [HttpGet]
        [Route("GetUpdates")]
        public IQueryable<UpdateVersion> GetUpdates()
        {
            try
            {
                return objEntity.UpdateVersions;
            }
            catch (Exception)
            {
                throw;
            }
        }
        // GET api/<controller>/5  
        [HttpGet]
        [Route("GetUpdates/{updateId}")]
        public IHttpActionResult GetUpdate(string updateId)
        {
            UpdateVersion objupdate = new UpdateVersion();
            try
            {
                objupdate = objEntity.UpdateVersions.Find(Convert.ToInt32(updateId));
                if (objupdate == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objupdate);
        }
        // POST api/<controller>  
        [HttpPost]
        [Route("AddUpdate/")]
        public IHttpActionResult AddUpdate(UpdateVersion data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var objupdate = objEntity.UpdateVersions.Find(data.UpdateId);
                if (objupdate != null)
                {
                    objupdate.Title = data.Title;
                    objupdate.Type = data.Type;
                    objupdate.Content = data.Content;
                    objEntity.UpdateVersions.Add(objupdate);
                    objEntity.SaveChanges();
                }

                objEntity.UpdateVersions.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        // DELETE api/<controller>/5  
        [HttpDelete]
        [Route("DeleteUpdate/{updateId}")]
        public IHttpActionResult DeleteUpdate(string updateId)
        {
            UpdateVersion update = objEntity.UpdateVersions.Find(Convert.ToInt32(updateId));
            if (update == null)
            {
                return NotFound();
            }

            objEntity.UpdateVersions.Remove(update);
            objEntity.SaveChanges();

            return Ok(update);
        }
    }
}  
