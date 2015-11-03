namespace web.Models
{
    using King.Mapper;

    public class Food
    {
        [ActionName("RowKey")]
        public string Name
        {
            get;
            set;
        }
        public double Fat
        {
            get;
            set;
        }
        public double Carb
        {
            get;
            set;
        }
        public double Protien
        {
            get;
            set;
        }
        public double CarbPerHundred
        {
            get;
            set;
        }
    }
}