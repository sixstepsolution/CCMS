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
    
    public partial class LOGIN_ATTEMPT
    {
        public decimal LOGIN_ATTEMPT_ID { get; set; }
        public string USER_ID { get; set; }
        public System.DateTime LOGIN_DT { get; set; }
        public string LOGIN_SUCCESS { get; set; }
        public string BROWSER_INFO { get; set; }
        public string FAILED_PASSWORD { get; set; }
        public Nullable<decimal> TIMESTAMP { get; set; }
        public string CLIENT_VERION { get; set; }
    }
}
