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
        private CCMSEntities db = new CCMSEntities();
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

        //[HttpPost]
        //public ActionResult UserLogin(tbl_Users user)
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Users.Where(u => u.Username == user.Username && u.Password == u.Password);
        //    if (result.Count() > 0)
        //    {
        //        Session["LoggedUserId"] = result.FirstOrDefault().Id;
        //        Session["LoggedUserEmail"] = result.FirstOrDefault().Email;
        //        Session["LoggedUserUsername"] = result.FirstOrDefault().Username;
        //        dct.Add("success", true);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}


        //[HttpPost]
        //public ActionResult SaveReceiveInBondCall(tbl_Person modal)
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    if (modal.First_Name == null)
        //    {
        //        dct.Add("success", false);
        //        dct.Add("message", "Personal information cant not be empty!");
        //        return Json(dct, JsonRequestBehavior.AllowGet);
        //    }
        //    try
        //    {
        //        DateTime dt = DateTime.UtcNow;
        //        modal.Created_Date = dt;
        //        modal.Modified_Date = dt;
        //        modal.Created_By = Convert.ToInt32(Session["LoggedUserId"].ToString());
        //        modal.Modified_By = Convert.ToInt32(Session["LoggedUserId"].ToString());
        //        db.tbl_Person.Add(modal);
        //        if (db.SaveChanges() > 0)
        //        {
        //            dct.Add("success", true);
        //            dct.Add("message", "Saved successfully.");
        //        }
        //        else
        //        {
        //            dct.Add("success", false);
        //            dct.Add("message", "Saved un-successfully.");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        dct.Add("success", false);
        //        dct.Add("message", ex.Message);
        //    }

        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult GetReceiveInbondingCall(ReceiveInbondingCallInputs inputs)
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();


        //    //var gg = ModelState.IsValid;
        //    //var result = db.tbl_Person.Where(x => x.ID_No.Contains(inputs.id_number)
        //    //|| x.Bureau_Number.Contains(inputs.bureauId)
        //    //|| x.First_Name.Contains(inputs.firstname)
        //    //|| x.Surname.Contains(inputs.surname)
        //    //).AsQueryable();

        //    IQueryable<tbl_Person> result = db.tbl_Person;

        //    if (!string.IsNullOrEmpty(inputs.id_number))
        //        result = result.Where(app => app.ID_No.ToLower().Contains(inputs.id_number.ToLower()));

        //    if (!string.IsNullOrEmpty(inputs.bureauId))
        //        result = result.Where(app => app.Bureau_Number.ToLower().Contains(inputs.bureauId.ToLower()));

        //    if (!string.IsNullOrEmpty(inputs.firstname))
        //        result = result.Where(app => app.First_Name.ToLower().Contains(inputs.firstname.ToLower()));

        //    if (!string.IsNullOrEmpty(inputs.surname))
        //        result = result.Where(app => app.Surname.ToLower().Contains(inputs.surname.ToLower()));

          
        //    if (inputs.dob != null)
        //    {
        //        result = result.Where(x => DateTime.Compare(x.Date_Of_Birth.Value, inputs.dob.Value) == 0);
        //    }
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}


        //public ActionResult GetIndustries()
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Industry.ToList();
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult GetBureaus()
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Bureau.ToList();
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}


        //public ActionResult GetPassports()
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Passport_Number.ToList();
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}


        //public ActionResult GetIdentityNumbers()
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Identity_Number.ToList();
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}



        //public ActionResult GetForeignIdentityNumbers()
        //{
        //    Dictionary<string, object> dct = new Dictionary<string, object>();

        //    var result = db.tbl_Foreign_Identity_Number.ToList();
        //    if (result.Count() > 0)
        //    {
        //        dct.Add("success", true);
        //        dct.Add("result", result);
        //    }
        //    else
        //    {
        //        dct.Add("success", false);
        //    }
        //    return Json(dct, JsonRequestBehavior.AllowGet);
        //}




        public ActionResult ReceiveInnbondCall()
        {

            return View();
        }

    }
}