namespace web.Controllers
{
    using System.Collections.Generic;
    using System.Configuration;
    using System.Web.Http;
    using King.Azure.Data;
    using Models;

    public class NutritionController : ApiController
    {
        #region Members
        private static readonly string connectionString = ConfigurationManager.ConnectionStrings["datastore"].ConnectionString;
        private readonly ITableStorage storage = null;
        #endregion

        public NutritionController()
            : this(new TableStorage("foods", connectionString))
        { }
        public NutritionController(ITableStorage storage)
        { }


        [HttpGet]
        public IEnumerable<Food> Get()
        {
            return null;
        }
    }
}