using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Robo.Models
{
    public class RoboRepositorio : Interface
    {
        public Head GetHead()
        {
            return new Head
            {
                Inclination = 0,
                Rotation = 0
            };
        }
        public Pulse GetPulse()
        {
            return new Pulse
            {
                Rotation = 0
            };
        }
        public Elbow GetElbow()
        {
            return new Elbow
            {
                Contraction = 0
            };
        }
        public RoboApp GetRobo()
        {
            return new RoboApp
            {
                Head = GetHead(),
                LeftElbow = GetElbow(),
                RightElbow = GetElbow(),
                LeftPulse = GetPulse(),
                RightPulse = GetPulse()
            };
        }
    }
}
