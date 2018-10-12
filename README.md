# SamsungIoTblinkt

<img src="docs/assets/BlinkT.JPG" width="256" title="BlinkT LED Strop">

A simple IoT light which controls a blinkt LED and registers itself with the [Mozilla WoT Gateway.](https://iot.mozilla.org/gateway/) The application depends on the node-blinkt and mozilla WoT node libraries. 

## Prerequisits
For this application we used the Raspberry Pi 3B and Raspberry Pi Zero W.
You will need node at version 8.10.
You will need the node package manager at version npm at version 6.4.1

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

### Testing The Program From Command Line
Before running the application, which will register the device with the Mozilla WoT Gateway you can test out your LED lights on the Blinkt by running the example programs created in the example directory. Go to the sub directory by typing in your terminal:

    ``` /> cd ~/samsung/SamsungIoTblinkt/examples:```

Here you can find a number of programs to test your blinkt lights. To switch them on and off you can do in your terminal:

    ```
    pi@raspberrypi:~/samsung/SamsungIoTblinkt/examples $ node on-off.js 
    Switching on all lights
    *** Switching Lights On ***
    Switching on all lights
    *** Switching Lights Off ***```

Feel free to try the other programs out.

### Starting The Program From Command Line
To start the bluetooth wifi manager go to the root of your SamsungIoTblinkt directory and start the app using node:

    ```/> node app.js```
    
Now go to your Mozilla Gatway and search for a new 'Thing' to add. You should find a new Mozilla WoT can be added and controlled.

