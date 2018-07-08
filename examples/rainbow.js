/**
 * Created by nherriot on 07/07/18.
 */

var convert = require('color-convert');
var Blinkt = require("node-blinkt");

// Creates 16 equal divisions of 360 degrees. (i.e. 22deg). Used to have an equal color 'hue' for each led
var spacing = 360.0 / 16.0;
var hue = 0;                                  // A variable to store the current 'hue' value. See: http://colorizer.org/
var start = Date.now();                       // Get the current UTC time which is used to start our random rainbow start color
const pixels = 8;                             // The number of pixels in our light
const brightness = 1;                         // Set this to globally set the rainbow
hue = Math.floor((start / 10) % 360);         // Create a value between 0-360 based on the current time. i.e. a random start


// Create a blinkt object and set the lights onto a known OFF state
leds = new Blinkt();
leds.setup();
leds.clearAll();
leds.sendUpdate();
let onOff = false;							// A variable to set when a light is on or off


for (x=0; x<pixels; x++) {
  console.log('Pixel number is: ' + x);
  var offset = x * spacing;
  // We need the radial number i.e. (0-360) to be in a range of (0-100) for a hue value used by the color-convert 0-100 range
  var h = ((hue + offset) % 360) / 3.6;
  console.log('hue value is: ' + h);
  var rgbArray = convert.hsv.rgb(h, 100, 100);
  console.log('RGB Array is: ' + rgbArray);
  setPixel(x, rgbArray[0], rgbArray[1], rgbArray[2], brightness);

}
leds.sendUpdate();

