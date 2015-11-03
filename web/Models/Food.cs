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
        public double FatPercentage
        {
            get
            {
                return (this.Fat / (this.Fat + this.Carb + this.Protien)) * 100;
            }
        }
        public double Carb
        {
            get;
            set;
        }
        public double CarbPercentage
        {
            get
            {
                return (this.Carb / (this.Fat + this.Carb + this.Protien)) * 100;
            }
        }
        public double Protien
        {
            get;
            set;
        }
        public double ProtienPercentage
        {
            get
            {
                return (this.Protien / (this.Fat + this.Carb + this.Protien)) * 100;
            }
        }
        public double CarbPerHundred
        {
            get;
            set;
        }
    }
}