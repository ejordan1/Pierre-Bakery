using System;
using System.Collections.Generic;
using Models;
namespace Pierre {
    public class Program {
        public static void Main(){
            Console.WriteLine("Welcome to Pierre's Bakery. We sell bread and pastries. Bread costs $5, buy to get one free. Pastries cost $2 or 3 for $5. First you will be asked how many loafs of...loaves? how the heck do you spell loa--anyway how many breads you would like to purchase, then you will be asked how many pastries, and then you will get back the total. Press [any key] to proceed.");

            string userIn = Console.ReadLine();
            
            int totalPrice = 0;
            Console.WriteLine("How many lo-- how much bread do you want?");
            int breadsInput = int.Parse(Console.ReadLine());
            totalPrice += Bread.BreadTotalPrice(breadsInput);
            Console.WriteLine ("Cost of breads: " + totalPrice);
            
            Console.WriteLine("How many pastries do you want?");
            int pastriesInput = int.Parse(Console.ReadLine());
            Console.WriteLine("Cost of pastries: " + Pastry.PastriesTotalPrice(pastriesInput));
            totalPrice += Pastry.PastriesTotalPrice(pastriesInput);
            
            Console.WriteLine("Your total is: " + totalPrice);
        }
    }
}