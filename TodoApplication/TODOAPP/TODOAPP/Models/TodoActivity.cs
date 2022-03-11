using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TODOAPP.Models
{
   
    public class TodoActivity
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; } 
        public string Status { get; set; } = "pending";
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdated { get; set; }
    }

   
}
