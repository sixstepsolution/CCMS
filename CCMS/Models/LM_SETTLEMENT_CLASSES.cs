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
    
    public partial class LM_SETTLEMENT_CLASSES
    {
        public string CODE { get; set; }
        public string CLASS { get; set; }
        public string DESCRIPTION { get; set; }
        public decimal UPPER_LIMIT { get; set; }
        public string MBOD_DESCRIPTION { get; set; }
        public Nullable<decimal> MBOD_UPPER_LIMIT { get; set; }
        public Nullable<bool> MBOD_CALC_LOE { get; set; }
    }
}