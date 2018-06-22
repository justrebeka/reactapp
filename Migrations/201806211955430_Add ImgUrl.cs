namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddImgUrl : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Bikes", "ImageUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Bikes", "ImageUrl");
        }
    }
}
