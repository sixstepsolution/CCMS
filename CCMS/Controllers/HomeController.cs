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
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Dashboard()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult CCMSDashboard()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult QueryByPerson()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Trust()
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
            return Json(dct, JsonRequestBehavior.AllowGet);
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
            return Json(dct, JsonRequestBehavior.AllowGet);
        }

    }
}