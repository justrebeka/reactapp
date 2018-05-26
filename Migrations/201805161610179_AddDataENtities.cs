namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDataENtities : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accessories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Type = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Batteries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Model = c.String(),
                        Autonomy = c.Int(nullable: false),
                        Voltage = c.Int(nullable: false),
                        ChargeTime = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.BikeAccessoryMaps",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BikeId = c.Int(nullable: false),
                        AccessorryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
           CreateTable(
                "dbo.Engines",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Model = c.String(),
                        MaxSpeed = c.Int(nullable: false),
                        Power = c.Int(nullable: false),
                        ElectricVoltage = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OrderId = c.Int(nullable: false),
                        Number = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Status = c.String(),
                        Product = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TestRides",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Name = c.String(),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Height = c.Int(nullable: false),
                        Weight = c.Int(nullable: false),
                        Age = c.Int(nullable: false),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
            DropTable("dbo.TestRides");
            DropTable("dbo.Orders");
            DropTable("dbo.Engines");
            DropTable("dbo.Bikes");
            DropTable("dbo.BikeAccessoryMaps");
            DropTable("dbo.Batteries");
            DropTable("dbo.Accessories");
        }
    }
}
