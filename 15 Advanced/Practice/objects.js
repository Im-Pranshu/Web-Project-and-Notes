// Creating an object for house keepers.
var houseKeeper1 = {
    name : "Ranno",
    age : "50",
    experience : "10 years",
    cleaningExp : ["Toiler","Living Room","Road"]
};
var houseKeeper2 = {
    name : "Sanno",
    age : "40",
    experience : "12 years",
    cleaningExp : ["Toiler","Road"]
};

// console.log(houseKeeper1.name);
// console.log(houseKeeper1.age);
// console.log(houseKeeper1.experience);
// console.log(houseKeeper1.cleaningExp);

// Creating a constructor function instead of creating of creating multiple objects where we need to define the things again and again it works just like classes.
function HouseKeeper(name,age,experience,cleaningExp){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.cleaningExp = cleaningExp;
    this.startCleaning = function() {
        alert("--- cleaning has been started ---");
    }
}

var houseKeeper3 = new HouseKeeper("Juna",23,"2 years",["Bed Room" , "Gallery", "Corridor"]);

console.log(houseKeeper3.startCleaning);