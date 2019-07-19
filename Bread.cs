namespace Models{
    public class Bread{
        private string breadType {get; set;}
        
        public Bread(){
            
        }

        public static int BreadTotalPrice(int numberOfBreads){
            int n = numberOfBreads / 3;
            return n * 10 + (numberOfBreads % 3) * 5;
        }
    }
}