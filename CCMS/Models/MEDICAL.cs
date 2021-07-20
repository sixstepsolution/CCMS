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
    
    public partial class MEDICAL
    {
        public decimal MEDICAL_ID { get; set; }
        public Nullable<decimal> FVC { get; set; }
        public Nullable<decimal> FEV1 { get; set; }
        public Nullable<decimal> FVC_FEV1 { get; set; }
        public Nullable<decimal> SP02 { get; set; }
        public string SPIRO_SUCCESSFULL { get; set; }
        public string SPIRO_COMMENT { get; set; }
        public Nullable<System.DateTime> PREV_EXAMINATION_D { get; set; }
        public string PREV_EXAM_CENTRE { get; set; }
        public string PREV_CERTIFICATION { get; set; }
        public string FIRST_EXAM { get; set; }
        public Nullable<System.DateTime> EXAM_D { get; set; }
        public string EXAM_WHERE { get; set; }
        public string THIS_EXAM_CENTRE { get; set; }
        public string TRANSPORT_LIABLE { get; set; }
        public Nullable<System.DateTime> TRANSPORT_CLAIM_D { get; set; }
        public string NAME_OF_DR { get; set; }
        public string ADDR_OF_HOSP_1 { get; set; }
        public string ADDR_OF_HOSP_2 { get; set; }
        public string ADDR_OF_HOSP_3 { get; set; }
        public string ADDR_OF_HOSP_4 { get; set; }
        public string WEIGHT { get; set; }
        public string URINE { get; set; }
        public string HEIGHT { get; set; }
        public string BLODD_PRESSURE { get; set; }
        public string SMOKE { get; set; }
        public string SMOKE_COMMENT { get; set; }
        public Nullable<System.DateTime> EXAMINER_SIGNATURE_D { get; set; }
        public string EXAMINER_SIGN { get; set; }
        public Nullable<decimal> SELECTED_STUDY_ID { get; set; }
        public string DX_LIFE_FILE_ID { get; set; }
        public Nullable<decimal> NURSE_SIGNATURE_DETAIL_ID { get; set; }
        public Nullable<System.DateTime> NURSE_EVALUATION_DT { get; set; }
        public Nullable<decimal> DR_SIGNATURE_DETAIL_ID { get; set; }
        public Nullable<System.DateTime> DR_SIGNATURE_DT { get; set; }
        public Nullable<System.DateTime> SPIRO_RECORDAL_DT { get; set; }
        public Nullable<decimal> DR_SKETCH_DETAIL_ID { get; set; }
        public Nullable<System.DateTime> RADIOGRAPHER_EVALUATION_DT { get; set; }
        public string RADIOGRAPHER_ABNORMALITY_DETECTED { get; set; }
        public string RADIOGRAPHER_COMMENT { get; set; }
        public string PULSE { get; set; }
        public string CREATED_BY { get; set; }
        public System.DateTime CREATED_DT { get; set; }
        public string MODIFIED_BY { get; set; }
        public System.DateTime MODIFIED_DT { get; set; }
        public decimal TIMESTAMP { get; set; }
        public string RESPIRATION_RATE { get; set; }
        public string OLD_TB_SUSPECT { get; set; }
        public string ACTICE_TB_SUSPECT { get; set; }
        public string DECLARATION_SELECTED { get; set; }
        public Nullable<decimal> DR_PERSON_ID { get; set; }
        public Nullable<decimal> SPIRO_DOC_ID { get; set; }
        public string MEDICAL_SOURCE { get; set; }
        public string CREATED_BY_USERGRP_CD { get; set; }
        public string MODIFIED_BY_USERGRP_CD { get; set; }
        public string POSTPONE { get; set; }
        public string POSTPONE_REASON { get; set; }
        public string SPIRO_QUALITY_RATING { get; set; }
        public Nullable<decimal> MCP_FVC { get; set; }
        public Nullable<decimal> MCP_FEV1 { get; set; }
        public Nullable<decimal> MCP_FVC_FEV1 { get; set; }
        public string MCP_SPIRO_OVERRIDE { get; set; }
        public string MCP_SPIRO_QUALITY_RATING { get; set; }
    }
}
