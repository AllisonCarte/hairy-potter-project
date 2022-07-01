let id = 1;

export const makePottery = (shape, weight, height) => {
    let potteryObject = {}
        potteryObject.shape = shape,
        potteryObject.weight = weight,
        potteryObject.height = height,
        potteryObject.id = id++
    return potteryObject
}