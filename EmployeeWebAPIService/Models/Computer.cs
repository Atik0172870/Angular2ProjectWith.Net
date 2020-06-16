using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeWebAPIService.Models
{
    public class Computer
    {
        private readonly Processor _processor;
        public Computer(Processor processor)
        {
            this._processor = processor;
        }
        
    }
    public class Processor
    {
        public Processor(string name)
        {

        }
        
    }
}