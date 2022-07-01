let catalog = []

export const toSellOrNotToSell = (catalogObject) => {
    if (catalogObject.cracked === false) {
        if (catalogObject.weight >= 6) {
            catalogObject.price = 40.00
        }
        else {
            catalogObject.price = 20.00
        }
        catalog.push(catalogObject)
    }
    return catalogObject
}

export const usePottery = () => {

    return catalog.map(catalogObject => ({ ...catalogObject }))
}