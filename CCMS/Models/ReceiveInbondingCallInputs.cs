using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCMS.Models
{
    public class ReceiveInbondingCallInputs
    {
        public string id_type { get; set; }
        public string id_number { get; set; }
        public string firstname { get; set; }
        public string surname { get; set; }
        public string refNumber { get; set; }
        public string bureauId { get; set; }
        public DateTime? dob { get; set; }
    }
}