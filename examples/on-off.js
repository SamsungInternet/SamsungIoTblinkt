/**
 * Created by nherriot on 07/07/18.
 *
 * A simple light which goes on and off every 5 seconds.
 * To run:    /> node on-off.js
 *
 */

var Blinkt = require("node-blinkt");
// Create a blinkt object and set the lights onto a known OFF state
leds = new Blinkt();
leds.setup();
leds.clearAll();
leds.sendUpdate();
let onOff = false;							// A variable to set when a light is on or off

function switchOnOff() {
	console.log('Switching on all lights');
	if (onOff){
		console.log('*** Switching Lights Off ***');
		leds.clearAll();
		onOff = false;
	} else {
		console.log('*** Switching Lights On ***');
		leds.setAllPixels(156, 156, 156, 0.9);
		onOff = true;
	}
	leds.sendUpdate();
}

function switchOff() {
	console.log('Switching off all lights')
	leds.clearAll();
	leds.sendUpdate();
}

// Set an interval timer which switches the LED lights on every 5 seconds
const intervalObjOnOff = setInterval(switchOnOff, 5000);

// A hack to listen on stdin that will never come to keep our process alive.
process.stdin.resume();
