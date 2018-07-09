/**
 * Created by nherriot on 07/07/18.
 *
 * A simple light which shows a moving rainbow of colour.
 * To run:    /> node rainbow.js
 *
 */

var convert = require('color-convert');
var Blinkt = require("node-blinkt");

// Creates 16 equal divisions of 360 degrees. (i.e. 22deg). Used to have an equal color 'hue' for each led
var spacing = 360.0 / 16.0;
const pixels = 8;                             // The number of pixels in our light
const brightness = 1;                         // Set this to globally set the rainbow
const acceleration = 2;                       // How quickly you want the rainbow to move 1 is per second 2 is twice as fast.

// Create a blinkt object and set the lights onto a known OFF state
leds = new Blinkt();
leds.setup();
leds.clearAll();
leds.sendUpdate();

// A function that will  take number of pixels to set and a brightness then create a range of colours based
// on a start point on current UTC time and move through all the colours using a hue saturation and value/brightness
function setRainbow(numPixels, brightness) {
  // We need to start our colour hue where our 'seconds' hand is on our clock. e.g. 30sec = 180 deg. 15 sec = 45 deg
  var currentDate = new Date();
  var seconds = currentDate.getSeconds()* acceleration;
  var currentHue = (seconds*6)%360;
  //console.log('\n*** Current seconds time is: ' + currentDate.getSeconds() + '***');

  for (x = 0; x < numPixels; x++) {
    var offset = x * spacing;
    // We need the radial number i.e. (0-360) to be in a range. If our calculated number is above 360 then take the remainder
    var h = ((currentHue + offset) % 360);
    //console.log('hue value is: ' + h);
    var rgbArray = convert.hsv.rgb(h, 100, 100);
    //console.log('RGB Array is: ' + rgbArray);
    leds.setPixel(x, rgbArray[0], rgbArray[1], rgbArray[2], brightness);
  }
  leds.sendUpdate();
}

console.log('***** Starting Rainbow Light *****');
// Set an interval timer which switches the LED lights on every 5 seconds
const intervalObjOnOff = setInterval(setRainbow, 1000, pixels, brightness);