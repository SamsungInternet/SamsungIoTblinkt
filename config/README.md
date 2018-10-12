# Setup As A Service
The Samsung POC Rainbow Light can be run as a service on the raspberry pi. This means that it can startup automatically 
every time your system is boot. The standard way to do this on a Linux system is using systemd. Information on this can be found here:

https://www.linux.com/learn/understanding-and-using-systemd

The Samsung POC Rainbow Light has a service configuration script which can be used to setup your system to do this. Follow the installation and setup steps below.

## Copy Your Service Profile
You need to copy the service profile script to the /etc/systemd/system dir as an admin (root) user type in a terminal:

     /> sudo cp config/samsung-rainbow-light.service /etc/systemd/system/
     
## Enable Your New Service
Once the new service profile is copied into the 'unit' systemd directory you need to set permissions on the file and enable it. To do this do type in a terminal:

     /> sudo chmod 664 /etc/systemd/system/samsung-rainbow-light.service
     /> systemctl daemon-reload

## Start Your New Bluetooth WiFi Manager Service
You can now start the service from the command line and check it's working. To Start the service type in a terminal:

     /> pi@raspberrypi:/etc/systemd/system $ sudo service samsung-rainbow-light status
     ● samsung-rainbow-light.service - Samsung POC Rainbow Light Service
       Loaded: loaded (/etc/systemd/system/samsung-rainbow-light.service; disabled; vendor preset: enabled)
       Active: active (running) since Tue 2018-07-10 16:55:21 BST; 3s ago
       Main PID: 2876 (node)
       CGroup: /system.slice/samsung-rainbow-light.service
             └─2876 /usr/bin/node /home/pi/samsung/SamsungIoTblinkt/app.js >> /home/pi/samsung/rainbow-light-manager.log 2>&1


To Start the service you can do this in your terminal window:

     /> sudo service samsung-rainbow-light start
     
Simply check the status again to see that it's running with the following command:

		pi@raspberrypi:/etc/systemd/system $ sudo service samsung-rainbow-light status
		● samsung-rainbow-light.service - Samsung POC Rainbow Light Service
		   Loaded: loaded (/etc/systemd/system/samsung-rainbow-light.service; disabled; vendor preset: enabled)
		   Active: active (running) since Tue 2018-07-10 16:55:21 BST; 2min 6s ago
		 Main PID: 2876 (node)
		   CGroup: /system.slice/samsung-rainbow-light.service
		           └─2876 /usr/bin/node /home/pi/samsung/SamsungIoTblinkt/app.js >> /home/pi/samsung/rainbow-light-manager.log 2>&1
		
		Jul 10 16:55:21 raspberrypi systemd[1]: Started Samsung POC Rainbow Light Service.
		Jul 10 16:55:28 raspberrypi node[2876]: *** Starting Rainbow Light Service ***

## Checking Via Your Browser That The Service Is Running
You are running a WoT 'Thing'. So our server should be running on port 8888. To check this go to the IP address that your server is running
on and look at port 8888. e.g. If our server is running on 192.168.1.100 then in your browser do:

You should see the JSON output like:



    {

    "name": "Blinkt Light",
    "href": "/",
    "@context": "https://iot.mozilla.org/schemas",
    "@type": [
        "OnOffSwitch",
        "Light"
    ],
    "properties": {
        "on": {
            "@type": "OnOffProperty",
            "label": "On/Off",
            "type": "boolean",
            "description": "Whether the light is turned on",
            "href": "/properties/on"
        },
        "brightness": {
            "@type": "BrightnessProperty",
            "label": "Brightness",
            "type": "number",
            "description": "The level of light from 0-10",
            "minimum": 0,
            "maximum": 10,
            "unit": "intensity",
            "href": "/properties/brightness"
        }
    },
    "actions": {
        "fade": {
            "label": "Fade",
            "description": "Fade the lamp to a given level",
            "input": {
                "type": "object",
                "required": [
                    "brightness",
                    "duration"
                ],
                "properties": {
                    "brightness": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 10,
                        "unit": "intensity"
                    },
                    "duration": {
                        "type": "number",
                        "minimum": 1,
                        "unit": "milliseconds"
                    }
                }
            },
            "href": "/actions/fade"
        }
    },
    "events": {
        "overheated": {
            "description": "The lamp has exceeded its safe operating temperature",
            "type": "number",
            "unit": "celsius",
            "href": "/events/overheated"
        }
    },
    "links": [
        {
            "rel": "properties",
            "href": "/properties"
        },
        {
            "rel": "actions",
            "href": "/actions"
        },
        {
            "rel": "events",
            "href": "/events"
        },
        {
            "rel": "alternate",
            "href": "ws://192.168.110.251:8080"
        }
    ],
    "description": "A web connected lamp"

    }

