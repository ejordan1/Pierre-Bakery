namespace Models{
    public class Food{
        private Date _madeDate {get;}
        private Date _expDate {get;}
        
        public Food(Date madeDate, Date expDate){
            this._madeDate = date;
            this._expDate = expDate;
        }

    }
    public class Date{
        private int _month {get;}
        private int _day {get;}
        private int _year {get;}
        public Date(int month, int day, int year){
            this._month = month;
            this._day = day;
            this._year = year;
        }
    }
}