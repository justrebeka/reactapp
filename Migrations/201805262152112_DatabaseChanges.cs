namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DatabaseChanges : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AccessoryTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Accessories", "AccessoryTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.Bikes", "FrontGear", c => c.String());
            AddColumn("dbo.Bikes", "RearGear", c => c.String());
            AddColumn("dbo.Bikes", "EngineId", c => c.Int(nullable: false));
            AddColumn("dbo.Bikes", "BatteryId", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "BikeId", c => c.Int(nullable: false));
            AddColumn("dbo.TestRides", "BikeId", c => c.Int(nullable: false));
            CreateIndex("dbo.Accessories", "AccessoryTypeId");
            CreateIndex("dbo.Bikes", "EngineId");
            CreateIndex("dbo.Bikes", "BatteryId");
            CreateIndex("dbo.Orders", "BikeId");
            CreateIndex("dbo.TestRides", "UserId");
            CreateIndex("dbo.TestRides", "BikeId");
            AddForeignKey("dbo.Accessories", "AccessoryTypeId", "dbo.AccessoryTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Bikes", "BatteryId", "dbo.Batteries", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Bikes", "EngineId", "dbo.Engines", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Orders", "BikeId", "dbo.Bikes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.TestRides", "BikeId", "dbo.Bikes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.TestRides", "UserId", "dbo.Users", "Id", cascadeDelete: true);
            DropColumn("dbo.Accessories", "Type");
            DropColumn("dbo.Bikes", "FrontShifter");
            DropColumn("dbo.Bikes", "RearShifter");
            DropColumn("dbo.Bikes", "Engine");
            DropColumn("dbo.Bikes", "Battery");
            DropColumn("dbo.Orders", "OrderId");
            DropColumn("dbo.Orders", "Product");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "Product", c => c.String());
            AddColumn("dbo.Orders", "OrderId", c => c.Int(nullable: false));
            AddColumn("dbo.Bikes", "Battery", c => c.String());
            AddColumn("dbo.Bikes", "Engine", c => c.String());
            AddColumn("dbo.Bikes", "RearShifter", c => c.String());
            AddColumn("dbo.Bikes", "FrontShifter", c => c.String());
            AddColumn("dbo.Accessories", "Type", c => c.String());
            DropForeignKey("dbo.TestRides", "UserId", "dbo.Users");
            DropForeignKey("dbo.TestRides", "BikeId", "dbo.Bikes");
            DropForeignKey("dbo.Orders", "BikeId", "dbo.Bikes");
            DropForeignKey("dbo.Bikes", "EngineId", "dbo.Engines");
            DropForeignKey("dbo.Bikes", "BatteryId", "dbo.Batteries");
            DropForeignKey("dbo.Accessories", "AccessoryTypeId", "dbo.AccessoryTypes");
            DropIndex("dbo.TestRides", new[] { "BikeId" });
            DropIndex("dbo.TestRides", new[] { "UserId" });
            DropIndex("dbo.Orders", new[] { "BikeId" });
            DropIndex("dbo.Bikes", new[] { "BatteryId" });
            DropIndex("dbo.Bikes", new[] { "EngineId" });
            DropIndex("dbo.Accessories", new[] { "AccessoryTypeId" });
            DropColumn("dbo.TestRides", "BikeId");
            DropColumn("dbo.Orders", "BikeId");
            DropColumn("dbo.Bikes", "BatteryId");
            DropColumn("dbo.Bikes", "EngineId");
            DropColumn("dbo.Bikes", "RearGear");
            DropColumn("dbo.Bikes", "FrontGear");
            DropColumn("dbo.Accessories", "AccessoryTypeId");
            DropTable("dbo.AccessoryTypes");
        }
    }
}
