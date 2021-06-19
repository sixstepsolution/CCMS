using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CCMS.Controllers
{
    public class HomeController : Controller
    {
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
        public ActionResult ReceiveInnbondCall()
        {

            return View();
        }
    }
}