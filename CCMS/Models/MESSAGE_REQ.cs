//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCMS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class MESSAGE_REQ
    {
        public decimal RUN_NUMBER { get; set; }
        public string REQ_TYPE { get; set; }
        public string REQ_NAME { get; set; }
        public string REQ_PARAMS { get; set; }
        public string SUBMIT_USER { get; set; }
        public string RUN_STATUS { get; set; }
        public System.DateTime SCHEDULE_DATE { get; set; }
        public Nullable<System.DateTime> ACT_START_TIME { get; set; }
        public Nullable<System.DateTime> COMPLETION_DATE { get; set; }
        public string FAIL_REASON { get; set; }
        public decimal TIMESTAMP { get; set; }
        public byte[] PAYLOAD { get; set; }
        public Nullable<decimal> DOC_REPOS_ID { get; set; }
        public string Submit_User_Grp { get; set; }
    }
}
