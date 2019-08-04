namespace Models
{
    public class Bread
    {
        public string _breadType { get; set; }
        public bool _halfLoaf { get; set; }

        public static int BreadTotalPrice(int numberOfBreads)
        {
            int n = numberOfBreads / 3;
            return n * 10 + (numberOfBreads % 3) * 5;
        }
    }
}
