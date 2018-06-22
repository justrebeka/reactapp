namespace ReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameImgUrltoImage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Bikes", "Image", c => c.String());
            DropColumn("dbo.Bikes", "ImageUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Bikes", "ImageUrl", c => c.String());
            DropColumn("dbo.Bikes", "Image");
        }
    }
}
