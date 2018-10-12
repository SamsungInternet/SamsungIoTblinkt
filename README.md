# SamsungIoTblinkt

<img src="docs/assets/BlinkT.JPG" width="256" title="BlinkT LED Strop">

A simple IoT light which controls a blinkt LED and registers itself with the [Mozilla WoT Gateway.](https://iot.mozilla.org/gateway/) The application depends on the node-blinkt and mozilla WoT node libraries. 

## Prerequisits
For this application we used the Raspberry Pi 3B and Raspberry Pi Zero W.

To control and 'see' your light controller you will need to be running the [Mozilla WoT Gateway.](https://iot.mozilla.org/gateway/)

### Operating System
The version of Rasbian used was Rasbian Stretch 2018-06-27
It is recommended you update your system with: /> sudo apt update
  
## Installation Instructions
This has been tested on Rasbian Stretch 2018 Version. The process involves the installation of the Mozilla WoT default Node package.

### Setup Of BlinkT Application
On a fresh Rasbian Stretch image do:

     /> mkdir samsung                                        // Create your project directory
     /> git clone https://github.com/nherriot/SamsungIoTblinkt.git    // Clone this repo to your directory
     /> cd ~ samsung/SamsungIoTblinkt/    // Move to the directory that contains the pacakges used for the system
     /> npm install                                          // Use Node's package management system to install all needed node pacakges.


### Starting The Program From Command Line
To start the bluetooth wifi manager go to the directory:
