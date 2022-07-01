import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {

    const pottery = usePottery()
    
    let htmlString = ''
    
    for (const objects of pottery) {
        htmlString += `<section class="pottery" id="pottery--${objects.id}">
        <h2 class="pottery__shape">${objects.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${objects.weight} grams and is ${objects.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${objects.price}
        </div>
    </section>`
    }    

return htmlString
}