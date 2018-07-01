namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateUserIdOnTestRide : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.TestRides", "UserId", "dbo.Users");
            DropIndex("dbo.TestRides", new[] { "UserId" });
            AlterColumn("dbo.TestRides", "UserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TestRides", "UserId", c => c.Int(nullable: false));
            CreateIndex("dbo.TestRides", "UserId");
            AddForeignKey("dbo.TestRides", "UserId", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
