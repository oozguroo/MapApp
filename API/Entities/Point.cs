using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Point
    {
        public int Id { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
    }
}