

export const firePottery = (shapedPottery, temp) => {
    shapedPottery.fired = true;
    
    if (temp > 2200) {
        shapedPottery.cracked = true 
    } else {
        shapedPottery.cracked = false
    }
   return shapedPottery
} 
