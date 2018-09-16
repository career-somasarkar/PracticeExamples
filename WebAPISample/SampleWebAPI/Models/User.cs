using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SampleWebAPI.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Company { get; set; }

        public string Address { get; set; }
    }
}