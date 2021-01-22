// https://github.com/Rabipedia/assignment

// Problem one - Kilometer to Meter.

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Error: Distance can't be negetive";
    } else if (typeof kilometer == "string") {
        return "Error: Wrong Input";
    } else {
        // Converting kilometer into meter.
        var meter = kilometer * 1000;
        return meter;
    }
}

var meter = kilometerToMeter(7);
console.log(meter);

// Problem two - Budget Calculator.
function budgetCalculator(watch, phone, laptop) {
    // Checking if input is negetive.
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Math Error";
    } else if (Number.isInteger(watch) == true && Number.isInteger(phone) == true && Number.isInteger(laptop) == true){
        // Calculating the price of watch, phone and laptop.
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        // Calculating total budget.
        var totalBudget = watchPrice + phonePrice + laptopPrice;

        return totalBudget;
    } else {
        return "Please enter vallid input"
    }
}

var budget = budgetCalculator(3, 3, 5);
console.log(budget);

// Problem three - Hotel cost.
function hotelCost(day) {
    var totalCost = 0;
    if (day < 0) {
        return "Math Error";
    // Calculating if input is integer or not.
    } else if (Number.isInteger(day) == true) {
        if (day <= 10) {
            totalCost = day * 100;
        // if the number of days are more than 10 and less than 20.
        } else if (day <=20) {
            var firstPart = 10 * 100;
            var remainder = day - 10;
            var lastPart = remainder * 80;

            totalCost = firstPart + lastPart;
        // if the days are more than 20.
        } else {
            var firstPart = 10 * 100;
            var midPart = 10 * 80;
            var remainder = day - 20;
            var lastPart = remainder * 50;

            totalCost = firstPart + midPart + lastPart;
        }
        return totalCost;
    } else {
        return "Enter vallid input";
    }
}

var totalCost = hotelCost(5);
console.log(totalCost);

// Problem four - Mega friend
function megaFriend (friends) {
    // checking if the input is an array or not.
    if (Array.isArray(friends) == true) {
        var nameLength = 0;
        var biggestName;
        for(var i = 0; i < friends.length; i++) {
            var element = friends[i].length;
                if(element > nameLength) {
                    nameLength = element;
                    biggestName = friends[i];
                }
        }
        return biggestName;
    } else {
        return "Enter vallid array name";
    }
}

var friendName = ['Rabi', 'Anishaa', 'Shakil', 'Lamiyaaaa'];
var biggestName = megaFriend(friendName)
console.log(biggestName);