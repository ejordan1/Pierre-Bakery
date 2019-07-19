namespace Models{
    public class Pastry{
        public string _pastryType {get;}
        
        public Pastry(Date madeDate, Date expDate, string pastryType){
            this._madeDate = date;
            this._expDate = expDate;
            this._pastryType = pastryType;
        }

        public static int PastriesTotalPrice(int numberOfPastries){
            int n = numberOfPastries / 3;
            return n * 5 + (numberOfPastries % 3) * 2;
        }
    }
}