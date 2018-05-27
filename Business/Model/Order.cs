using System;

namespace ReactApp.Business.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public Bike Bike { get; set; }
        public User User { get; set; }
    }
}