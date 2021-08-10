// https://github.com/mhSadique/learning
// kilometerToMeter
function kilometerToMeter(kilo) {
    return kilo * 1000;
}
// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    let watchPrice = Math.trunc(watch) * 50;
    let mobilePrice = Math.trunc(mobile) * 100;
    let laptopPrice = Math.trunc(laptop) * 500;
    let sum = watchPrice + mobilePrice + laptopPrice;
    return sum;
}
// hotelCost
function hotelCost(daysSpent) {
    let rateTenDays = 100;
    let rateTwentyDays = 80;
    let rateRestDays = 50;
    let totalCost = 0;
    for (let i = 0; i < daysSpent; i++) {
        if (i < 10) {
            totalCost += rateTenDays;
        }
        if (i >= 10 && i < 20) {
            totalCost += rateTwentyDays;
        }
        if (i >= 20) {
            totalCost += rateRestDays;
        }
    }
    return totalCost;
}

// megaFriend
function megaFriend(arr) {
    let longestName = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestName.length) {
            longestName = arr[i];
        }
    }
    return longestName;
}