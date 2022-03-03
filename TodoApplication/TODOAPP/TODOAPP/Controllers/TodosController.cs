using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using TODOAPP.Models;
using TODOAPP.Services;

namespace TODOAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {

        private readonly IConfiguration configuration;
        public TodosController(IConfiguration config)
        {
            configuration = config;

        }

        [HttpGet]
        public JsonResult Get()
        {
            TodoService service = TodoService.getInstance(configuration);
           
            return new JsonResult(service.GetTodo());
        }

        [HttpPost]

        public JsonResult Post(TodoActivity act)
        {
            TodoService service = TodoService.getInstance(configuration);

             return new JsonResult(service.PostTodo(act));
        }

        [HttpPut("{id}")]
        public JsonResult Put(TodoActivity act, int id)
        {
            TodoService service = TodoService.getInstance(configuration);

            return new JsonResult(service.UpdateTodo(act,id));
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            TodoService service = TodoService.getInstance(configuration);

            return new JsonResult(service.DeleteTodo(id));

        }
    }
}
