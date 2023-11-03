using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Download
    {
        public int Id { get; set; }
        public List<Point> Points { get; set; }
        public DateTime DateTime { get; set; }
    }
}
