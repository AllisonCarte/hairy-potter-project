// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 2, 7)
console.log(mug)
let vase = makePottery('vase', 4, 8)
console.log(vase)
let bowl = makePottery('bowl', 1, 6)
console.log(bowl)
let urn = makePottery('urn', 5, 10)
console.log(urn)
let jar = makePottery('jar', 4, 9)
console.log(jar)
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2201)
let firedVase = firePottery(vase, 900)
let firedBowl = firePottery(bowl, 2000)
let firedUrn = firePottery(urn, 1900)
let firedJar = firePottery(jar, 2100)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



