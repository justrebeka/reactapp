namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatemodelfortestride : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TestRides", "Model", c => c.String());
            AddColumn("dbo.TestRides", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.TestRides", "Image");
            DropColumn("dbo.TestRides", "Model");
        }
    }
}
