namespace Models{
    public class Bread : Food{
        private string _breadType {get; set;}
        private bool _halfLoaf {get; set;}
        public Bread(Date madeDate, Date expDate, string breadType){
            this._madeDate = date;
            this._breadType = breadType;
            this._expDate = expDate;
            this._halfLoaf = false;
        }

        public static int BreadTotalPrice(int numberOfBreads){
            int n = numberOfBreads / 3;
            return n * 10 + (numberOfBreads % 3) * 5;
        }
    }
}