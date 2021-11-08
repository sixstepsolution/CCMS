using CCMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CCMS.Controllers
{
    public class HomeController : Controller
    {
        private TRUST_DATAEntities _db = new TRUST_DATAEntities();
        public ActionResult DashboardNew()
        {
            return View();
        }
         public ActionResult MapBox()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetTrustedData(string searchKey)
        {
            Dictionary<string, object> dct = new Dictionary<string, object>();

            var result = _db.Sp_TrustedData_Search_Info(searchKey).ToList();
            if (result.Count() > 0)
            {
                dct.Add("success", true);
                dct.Add("result", result);
            }
            else
            {
                dct.Add("success", false);
            }
            var jsonResult = Json(dct, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = 500000000;
            return jsonResult;
            //return Json(dct, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public ActionResult GetTrusted804Data(string searchKey)
        {
            Dictionary<string, object> dct = new Dictionary<string, object>();

            var result = _db.Sp_Trusted_804_Data_Search_Info(searchKey).ToList();
            if (result.Count() > 0)
            {
                dct.Add("success", true);
                dct.Add("result", result);
            }
            else
            {
                dct.Add("success", false);
            }
            var jsonResult = Json(dct, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = 500000000;
            return jsonResult;
           // return Json(dct, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult GetTrusted804Data1(string searchKey)
        {
            Dictionary<string, object> dct = new Dictionary<string, object>();

            var result = _db.Sp_Trusted_804_Data_Search_Info(searchKey).ToList();
            if (result.Count() > 0)
            {
                dct.Add("success", true);
                dct.Add("result", result);
            }
            else
            {
                dct.Add("success", false);
            }
            var jsonResult = Json(dct, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = 500000000;
            return jsonResult;
            //return Json(dct, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetTrustedDataCount()
        {
            Dictionary<string, object> dct = new Dictionary<string, object>();

            var result = _db.Sp_TrustedData_count().ToList();
            if (result.Count() > 0)
            {
                dct.Add("success", true);
                dct.Add("result", result[0]);
            }
            else
            {
                dct.Add("success", false);
            }
            var jsonResult = Json(dct, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = 500000000;
            return jsonResult;
            //return Json(dct, JsonRequestBehavior.AllowGet);
        }

    }
}