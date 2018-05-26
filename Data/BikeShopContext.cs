using ReactApp.Data.Model;
using System.Data.Entity;

namespace ReactApp.Data
{
    public class BikeShopContext : DbContext
    {
        public DbSet<Bike> Bikes { get; set; }

        public DbSet<Battery> Batteries { get; set; }

        public DbSet<Accessory> Accessories { get; set; }

        public DbSet<BikeAccessoryMap> BikeAccessoryMap { get; set; }

        public DbSet<Engine> Engines { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<TestRide> TestRides { get; set; }

        public DbSet<User> Users { get; set; }
    }

}