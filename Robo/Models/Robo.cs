using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Robo.Models
{
    public class RoboApp
    {
        public Head Head { get; set; }

        public Elbow RightElbow { get; set; }

        public Elbow LeftElbow { get; set; }

        public Pulse RightPulse { get; set; }

        public Pulse LeftPulse { get; set; }

    }
}
