namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Bike : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bikes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Model = c.String(),
                        Frame = c.Int(nullable: false),
                        Fork = c.Int(nullable: false),
                        Handlebar = c.Int(nullable: false),
                        Rims = c.Int(nullable: false),
                        Saddle = c.Int(nullable: false),
                        Pedals = c.Int(nullable: false),
                        FrontGear = c.Int(nullable: false),
                        RearGear = c.Int(nullable: false),
                        ShiftLevers = c.Int(nullable: false),
                        Breaks = c.Int(nullable: false),
                        BreakLevers = c.Int(nullable: false),
                        Chain = c.Int(nullable: false),
                        FrameSuspension = c.Int(nullable: false),
                        ForkSuspension = c.Int(nullable: false),
                        Engine = c.Int(nullable: false),
                        Battery = c.Int(nullable: false),
                        Computer = c.Int(nullable: false),
                        Weight = c.Int(nullable: false),
                        MaxLoad = c.Int(nullable: false),
                        Price = c.Int(nullable: false),
                        FrameSeries = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Bikes");
        }
    }
}
