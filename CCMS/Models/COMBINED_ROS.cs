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
    
    public partial class COMBINED_ROS
    {
        public decimal PERSON_ID { get; set; }
        public System.DateTime STARTD { get; set; }
        public string MINE_NAME { get; set; }
        public Nullable<System.DateTime> TERMINATIOND { get; set; }
        public string TERMINATIONREASON { get; set; }
        public string OFFICE_SN_YEAR { get; set; }
        public string SITE_CODE { get; set; }
        public string SITE_NAME { get; set; }
        public string SRC { get; set; }
        public string CREATED_BY { get; set; }
        public System.DateTime CREATED_DT { get; set; }
        public Nullable<System.DateTime> MODIFIED_DT { get; set; }
        public string MODIFIED_BY { get; set; }
        public decimal TIMESTAMP { get; set; }
        public string EMPLOYMENT_TYPE { get; set; }
        public Nullable<int> COMBINED_ROS_SEQ { get; set; }
        public bool ALTER_RECORD { get; set; }
        public bool DELETE_RECORD { get; set; }
        public bool INSERT_RECORD { get; set; }
        public string ORIGINAL_SRC { get; set; }
        public Nullable<System.DateTime> ORIGINAL_STARTD { get; set; }
        public Nullable<System.DateTime> ORIGINAL_TERMINATIOND { get; set; }
        public Nullable<bool> SCHEDULE_F_MAPPED { get; set; }
        public string SCHEDULE_F_ID { get; set; }
        public Nullable<int> DAYS_WORKED { get; set; }
        public Nullable<decimal> ORIGINAL_SRC_DOC_ID { get; set; }
        public string MINE_LIST_CD { get; set; }
        public Nullable<System.DateTime> SRC_STARTD { get; set; }
        public Nullable<System.DateTime> SRC_TERMINATIOND { get; set; }
        public Nullable<System.DateTime> SRC_EFFECTIVE_DATE { get; set; }
    }
}
