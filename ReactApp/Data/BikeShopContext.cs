using ReactApp.Data.Model;
using System.Data.Entity;

namespace ReactApp.Data
{
    public class BikeShopContext : DbContext
    {
        public DbSet<Bike> Bikes { get; set; }
    }

}