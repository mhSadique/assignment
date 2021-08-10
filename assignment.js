
// Problem 01
function seerToMon(seer) {
    if (seer < 0) { // return a text when input value is negative
        return 'You cannot put a negative value.';
    }
    let mon = seer / 40; // calculating 1 mon equals 40 seer
    return mon;
}

// Problem 02
function totalSales(shirt, pants, shoes) {
    if (shirt < 0 || pants < 0 || shoes < 0) { // return the text when input value is negative
        return 'Input values cannot be negative.';
    }
    let shirtSales = shirt * 100;  // pricing the shirt at Tk 100,
    let pantsSales = pants * 200;  // pants at Tk 200, 
    let shoesSales = shoes * 500;  // shoes at Tk 500
    let total = shirtSales + pantsSales + shoesSales;
    return total;
}

// Problem 03
function deliveryCost(tShirts) {
    let firstOneHundredsPrice = 100;
    let secondOneHundredsPrice = 80;
    let restOfAllPrice = 50;
    let totalCost = 0;
    if (tShirts < 0) { // return the text when input value is negative
        return 'Please put a positive number.'
    }
    for (let i = 0; i < tShirts; i++) {
        if (i < 100) {
            totalCost += firstOneHundredsPrice;
        } else if (i >= 100 && i < 200) {
            totalCost += secondOneHundredsPrice;
        } else {
            totalCost += restOfAllPrice;
        }
    }
    return totalCost;
}

// Problem 04
function perfectFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 5) {
            return friends[i];
        }
    }
    // return the text below when there is no match
    return 'So sad! You have no perfect friend. Wish you have one soon.'
}