using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TODOAPP.Models;
using TODOAPP.Configuration;

namespace TODOAPP.Services
{
    public class TodoService
    {

        private readonly IConfiguration configuration;
        private TodoService(IConfiguration config)
        {
            configuration = config;

        }

        public static TodoService getInstance(IConfiguration config )
        {
            return new TodoService(config);
        }

        public DataTable GetTodo()
        {
            DataTable dt = new DataTable();
            using (var con = new SqlConnection(configuration.GetConnectionString("DefaultConnection")))
            using (var cmd = new SqlCommand("GetTodoList", con))
            using (var dad = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                dad.Fill(dt);
            }
            

            return dt;
        }

        public DataTable PostTodo(TodoActivity act)
        {
            DataTable dt = new DataTable();
            using (var con = new SqlConnection(configuration.GetConnectionString("DefaultConnection")))
            using (var cmd = new SqlCommand("CreateTodoList", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", act.Name);
                cmd.Parameters.AddWithValue("@Status", act.Status);
                cmd.Parameters.AddWithValue("@CreationDate", DateTime.Now);
                cmd.Parameters.AddWithValue("@LastUpdatedDate", DateTime.Now);
                using (var dad = new SqlDataAdapter(cmd))
                {

                    dad.Fill(dt);
                }

            }
            return dt;

        }

        public DataTable UpdateTodo(TodoActivity act, int id)
        {

            DataTable dt = new DataTable();
            using (var con = new SqlConnection(configuration.GetConnectionString("DefaultConnection")))
            using (var cmd = new SqlCommand("UpdateTodoList", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ID", id);
                cmd.Parameters.AddWithValue("@Status", act.Status);
                cmd.Parameters.AddWithValue("@LastUpdatedDate", DateTime.Now);
                using (var dad = new SqlDataAdapter(cmd))
                {
                    dad.Fill(dt);
                }
            }
            return dt;

        }

        public DataTable DeleteTodo(int id)
        {
            DataTable dt = new DataTable();
            using (var con = new SqlConnection(configuration.GetConnectionString("DefaultConnection")))
            using (var cmd = new SqlCommand("DeleteList", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ID", id);
                using (var dad = new SqlDataAdapter(cmd))
                {

                    dad.Fill(dt);
                }
            }
            return dt;
        }
    }
}
