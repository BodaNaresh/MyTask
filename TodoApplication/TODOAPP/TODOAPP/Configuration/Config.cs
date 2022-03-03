using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace TODOAPP.Configuration
{
    public class Config
    {
      private  readonly IConfiguration _configuration;
        public Config(IConfiguration configuration)
        {
            _configuration = configuration;

        }


        //private SqlConnection SqlConn = null;

        //public SqlConnection GetConnection
        //{
        //    get { return SqlConn; }
        //    set { SqlConn = value; }
        //}

        //public Config()
        //{
        //    string ConnectionString =_configuration.GetConnectionString("DefaultConnection");
        //    SqlConn = new SqlConnection(ConnectionString);
        //}




    }
}
