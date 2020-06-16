﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPIService.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using(EmployeeDbEntities db = new EmployeeDbEntities())
            {
                return db.Employees.ToList();
            }
        }
        public Employee Get(string code)
        {
            using(EmployeeDbEntities db = new EmployeeDbEntities())
            {
                return db.Employees.FirstOrDefault(e => e.Code == code);
            }
        }
    }
}
