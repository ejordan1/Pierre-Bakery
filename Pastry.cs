namespace Models
{
    public class Pastry
    {

        public static int PastriesTotalPrice(int numberOfPastries)
        {
            int n = numberOfPastries / 3;
            return n * 5 + (numberOfPastries % 3) * 2;
        }
    }
}