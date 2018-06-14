# MCOHome
This app adds support for Z-wave devices made by [MCOHome](http://www.mcohome.com).  
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://raw.githubusercontent.com/TedTolboom/com.mcohome/master/assets/images/small.jpg">
</a>  

## Links:
[MCOHome app Athom apps](https://apps.athom.com/app/com.mcohome)                    
[MCOHome app Github repository](https://github.com/TedTolboom/com.mcohome)   

**Note:** This app is using [HomeyConfig composer](https://www.npmjs.com/package/node-homey-config-composer).   
Please file Pull Requests on the *development* branch of this repository and with respect to the refactored files in _/drivers_ and _/config_ folders.   

## Supported devices:
### MCOHome Touch Panel Switches (1 - 4x)    
A glass panel switch with 1 - 4 capacitive touch buttons.    
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Switch-1/assets/icon.svg" width="10%" height="10%">
</a>
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Switch-2/assets/icon.svg" width="10%" height="10%">
</a>
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Switch-3/assets/icon.svg" width="6.2%" height="10%">
</a>
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Switch-4/assets/icon.svg" width="10%" height="10%">
</a>  
**Supported devices:**   
* Touch panel switch 1x: MH-S311(H), MH-S411(H), MH-S511(H)    
* Touch panel switch 2x: MH-S312(H), MH-S412, MH-S512, MH-S312 (Z-Wave Plus)   
* Touch panel switch 3x: MH-S513     
* Touch panel switch 4x: MH-S314, MH-S514, MH-S314 (Z-Wave Plus)

### MCOHome Touch Panel Dimmer  
A glass panel dimmer with 1 capacitive touch buttons.   
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Switch-1/assets/icon.svg" width="10%" height="10%">
</a>

A glass panel dimmer with 2 capacitive touch buttons.   
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/Dimmer-1-Plus/assets/icon.svg" width="10%" height="10%">
</a>

**Supported devices:**     
* Touch panel dimmer 1x: MH-P311, MH-P411, MH-P511  
* Touch panel dimmer 2x: MH-DT311

**Note:** Product Identification numbers have been added based on available information, but is still incomplete. If your touch panel switch is not recognized properly, please send me a message.

### MCOHome CO2 monitor     
Monitor CO2 concentration in air.  
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/MH9-CO2/assets/icon.svg" width="10%" height="10%">
</a>  

**Supported devices:**    
* CO2 monitor (MH9-CO2): MH9-CO2-WA, MH9-CO2-WD    

### MCOHome PM2.5 monitor     
Monitor the air quality in terms of Atmospheric particulate matter (PM2.5).    
<a href="https://github.com/TedTolboom/com.mcohome">
  <img src="https://rawgit.com/TedTolboom/com.mcohome/master/drivers/MH10-PM2.5/assets/icon.svg" width="10%" height="10%">
</a>  

**Supported devices:**    
* PM2.5 monitor (MH10-PM2.5): MH10-PM2.5-WA, MH10-PM2.5-WD    

## Future developments :
### MCOHome Heating Thermostat (MH7 series)    

## Supported Languages:
* English   
* Dutch    

## Supported Z-wave regions:
* Europe   
* Russia    
* China   
* U.S./Canada/Mexico        

## Feedback:
Any requests please post them in the [MCOHome app topic on the Athom Forum](https://forum.athom.com/discussion/3463/) or contact me on [Slack](https://athomcommunity.slack.com/team/tedtolboom)    
If possible, please report issues at the [issues section on Github](https://github.com/TedTolboom/com.mcohome/issues) otherwise in the above mentioned topic.     

### Donate:
If you like the app, consider a donation to support development    

## Changelog:     

### v1.0.5      
* Add support for MH-P311 (including new Z-wave plus version)   
* Add support for Z-wave plus version of touch panel switch MH-S312, MH-S314     

### v1.0.4      
* Add additional productID for MH9-CO2    
* Update meshdriver to 1.2.4      

### v1.0.3
* Add containment for issue with report handling MH10-PM2 for measure_PM2.5 capability       
* Update meshdriver to 1.2.3      

### v1.0.2
* Clean-up icons for MH9-CO2 and MH10-PM2      
* Add additional productID for MH10-PM2   

### v1.0.1
* Update to Z-wave meshdriver capabilities      
* Update correct image Switch-4   
* Add additional productID's for Touch Panel Switches (1-4x)        

### v1.0.0
* App store release   