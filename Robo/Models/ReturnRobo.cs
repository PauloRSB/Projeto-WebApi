using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Robo.Models
{
    public class ReturnRobo
    {
        public bool StatusReturn { get; set; }
        public RoboApp RoboReturn {get; set;}
        public string MensageReturn { get; set; }
    }
}
