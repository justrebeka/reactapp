/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[Name]
      ,[AccessoryTypeId]
  FROM [bikeshop].[dbo].[Accessories]


 

INSERT INTO AccessoryTypes(Name)
Values('Lumina fata')


  INSERT INTO Accessories(Name, AccessoryTypeId)
  VALUES( 'BBB Far BLS-7507 EcoBeam alb',1)

  USE [bikeshop]
GO

INSERT INTO [dbo].[Engines]
           ([Name]
           ,[Model]
           ,[MaxSpeed]
           ,[Power]
           ,[ElectricVoltage])
     VALUES
           ('Shimano Steps'
           ,'E8000, 70 Nm'
           ,40
           ,250
           ,36)
GO

USE [bikeshop]
GO

INSERT INTO [dbo].[Batteries]
           ([Model]
           ,[Autonomy]
           ,[Voltage]
           ,[ChargeTime])
     VALUES
           ('FOCUS T.E.C.'
           ,40
           ,756
           ,4)
GO

USE [bikeshop]
GO

INSERT INTO [dbo].[Bikes]
           ([Model]
           ,[Frame]
           ,[Fork]
           ,[Handlebar]
           ,[Rims]
           ,[Saddle]
           ,[Pedals]
           ,[FrontGear]
           ,[RearGear]
           ,[ShiftLevers]
           ,[Breaks]
           ,[BreakLevers]
           ,[Chain]
           ,[FrameSuspension]
           ,[ForkSuspension]
           ,[Computer]
           ,[Weight]
           ,[MaxLoad]
           ,[Price]
           ,[FrameSeries]
           ,[RiderHeight],
		   EngineId,
		   BatteryId)
     VALUES
           ('MTB electrica Focus Bold2 XS 11G 26 green/blue 2018'
           ,'7005 hydoformed aluminium, 3D forging, 148x12 mm through axle, internal cable routing'
           ,'RockShox Recon RL, 100x15 mm QR'
           ,'BBB, aluminium, flatbar, 720 mm, rise: 0 mm, backsweep: 9°'
           ,'Rodi Tryp 35, 559-35'
           ,'Trail Saddle'
           ,'FC-E8000-34T'
           ,'-'
           ,'Shimano Deore XT 8000, 11-speed'
           ,'Shimano SLX 7000'
           ,'Shimano Deore M6000, 200 mm/180'
           ,'Shimano'
           ,'Shimano chain'
           ,'-'
           ,'80 mm travel'
           ,'SHIMANO Steps E8000, colored LCD display, walk assist, bluetooth'
           ,19
           ,100
           ,16559
           ,'VFRTGBNHY4',
		   180,
		   1,
		   1
		   )
GO








