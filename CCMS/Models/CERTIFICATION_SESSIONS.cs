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
    
    public partial class CERTIFICATION_SESSIONS
    {
        public decimal SESSION_ID { get; set; }
        public decimal CHAIR_PERSON_ID { get; set; }
        public decimal PANEL_ID { get; set; }
        public string SESSION_STATUS { get; set; }
        public string CREATED_BY { get; set; }
        public System.DateTime CREATED_DT { get; set; }
        public string MODIFIED_BY { get; set; }
        public System.DateTime MODIFIED_DT { get; set; }
        public Nullable<decimal> TIMESTAMP { get; set; }
        public Nullable<decimal> CURRENT_CLAIM { get; set; }
        public string CHAIR_PRESENT { get; set; }
        public Nullable<System.DateTime> HEART_BEAT { get; set; }
        public string CLOSE_REASON { get; set; }
    }
}