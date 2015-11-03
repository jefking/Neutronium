namespace web.Controllers
{
    using System.Collections.Generic;
    using System.Configuration;
    using System.Threading.Tasks;
    using System.Web.Http;
    using King.Azure.Data;
    using King.Mapper;
    using Models;
    using System.Linq;

    public class NutritionController : ApiController
    {
        #region Members
        /// <summary>
        /// Connection String
        /// </summary>
        private static readonly string connectionString = ConfigurationManager.AppSettings["datastore"];

        /// <summary>
        /// Table Storage Account
        /// </summary>
        private readonly ITableStorage storage = null;
        #endregion

        #region Constructors
        public NutritionController()
            : this(new TableStorage("foods", connectionString))
        {
        }

        public NutritionController(ITableStorage storage)
        {
            this.storage = storage;
        }
        #endregion

        [HttpGet]
        public async Task<IEnumerable<Food>> Get()
        {
            var datas = await storage.QueryByPartition(" ");
            return datas.Select(d => d.Map<Food>());
        }
    }
}