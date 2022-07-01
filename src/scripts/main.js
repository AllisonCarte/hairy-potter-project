// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 2, 7)
let vase = makePottery('vase', 6, 8)
let bowl = makePottery('bowl', 1, 6)
let urn = makePottery('urn', 7, 10)
let jar = makePottery('jar', 4, 9)
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2201)
let firedVase = firePottery(vase, 900)
let firedBowl = firePottery(bowl, 2000)
let firedUrn = firePottery(urn, 1900)
let firedJar = firePottery(jar, 2100)
// Determine which ones should be sold, and their price
// Fire each piece of pottery in the kiln
let catMug = toSellOrNotToSell(firedMug)
let catVase = toSellOrNotToSell(firedVase)
let catBowl = toSellOrNotToSell(firedBowl)
let catUrn = toSellOrNotToSell(firedUrn)
let catJar = toSellOrNotToSell(firedJar)



// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = PotteryList()

