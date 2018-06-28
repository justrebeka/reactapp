namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "UserId", "dbo.Users");
            DropIndex("dbo.Orders", new[] { "UserId" });
            AddColumn("dbo.Users", "AccessKey", c => c.String());
            AlterColumn("dbo.Orders", "Number", c => c.String());
            AlterColumn("dbo.Orders", "UserId", c => c.String());
            DropColumn("dbo.Users", "Height");
            DropColumn("dbo.Users", "Weight");
            DropColumn("dbo.Users", "Age");
            DropColumn("dbo.Users", "Password");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "Password", c => c.String());
            AddColumn("dbo.Users", "Age", c => c.Int(nullable: false));
            AddColumn("dbo.Users", "Weight", c => c.Int(nullable: false));
            AddColumn("dbo.Users", "Height", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "UserId", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "Number", c => c.Int(nullable: false));
            DropColumn("dbo.Users", "AccessKey");
            CreateIndex("dbo.Orders", "UserId");
            AddForeignKey("dbo.Orders", "UserId", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
