/**
 * Created by nherriot on 07/07/18.
 *
 * A simple light which shows a moving white LED which moves up and down the light.
 * To run:    /> node movingLed.js
 *
 */

var convert = require('color-convert');
var Blinkt = require("node-blinkt");

const pixels = 8;                             // The number of pixels in our light
const brightness = 1;                         // Set this to globally set the rainbow
const rgbArray = [255,255,255];               // An array to define the colour of our LED Pixel
var activeLed = 0;                          // A value of 0-to-pixels. A global value used to track what LED is currently active.

// Create a blinkt object and set the lights onto a known OFF state
leds = new Blinkt();
leds.setup();
leds.clearAll();
leds.sendUpdate();

// A function that will  take number of pixels to set and a brightness then create a range of colours based
// on a start point on current UTC time and move through all the colours using a hue saturation and value/brightness
function setmovingPixel(numPixels, brightness) {

  for (x = 0; x < numPixels; x++) {
    // Set our LED if it is the active LED, otherwise set it OFF.
    if (x == activeLed) {
      leds.setPixel(x, rgbArray[0], rgbArray[1], rgbArray[2], brightness);
    } else {
      leds.setPixel(x, 0, 0, 0, 0);

    }
  }
  //console.log('LEDs set. Active LED is:  ' + activeLed);
  leds.sendUpdate();
  if (activeLed == numPixels){
    activeLed = 0;
  }else {
    activeLed = activeLed+1;
  }


}

console.log('***** Starting Moving Light *****');
// Set an interval timer which switches the LED lights on every .2 seconds
const intervalObjOnOff = setInterval(setmovingPixel, 200, pixels, brightness);