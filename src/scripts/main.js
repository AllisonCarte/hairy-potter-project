// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'

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
// Fire each piece of pottery in the kiln
let catMug = firePottery(mug)
let catVase = firePottery(vase)
let catBowl = firePottery(bowl)
let catUrn = firePottery(urn)
let catJar = firePottery(jar)
// Invoke the component function that renders the HTML list



