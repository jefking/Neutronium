namespace web.Controllers
{
    using System.Collections.Generic;
    using System.Configuration;
    using System.Threading.Tasks;
    using System.Web.Http;
    using King.Azure.Data;

    public class NutritionController : ApiController
    {
        #region Members
        private static readonly string connectionString = ConfigurationManager.ConnectionStrings["datastore"].ConnectionString;
        private readonly ITableStorage storage = null;
        #endregion

        #region Constructors
        public NutritionController()
            : this(new TableStorage("foods", connectionString))
        { }
        public NutritionController(ITableStorage storage)
        {
            this.storage = storage;
        }
        #endregion

        [HttpGet]
        public async Task<IEnumerable<IDictionary<string, object>>> Get()
        {
            return await storage.QueryByPartition(null);
        }
    }
}