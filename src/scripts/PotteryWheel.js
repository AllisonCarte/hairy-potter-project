const potteryObject = {
    id: 0
}

const makePottery = (shape, weight, height) => {
   potteryObject.shape = shape,
   potteryObject.weight = weight,
   potteryObject.height = height,
   potteryObject.id += 1
   return potteryObject
}

export {makePottery}
