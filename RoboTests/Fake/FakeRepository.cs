using Robo.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace RoboTests.Fake
{
    class FakeRepository : Interface
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
