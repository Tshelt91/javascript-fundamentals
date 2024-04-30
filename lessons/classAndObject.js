class Cat {
    constructor (color, weight, eyecolor, mood) {
    console.log ("The cat is beautiful!")

this.color = color;
this.weight = weight;
this.eyecolor = eyecolor;
this.mood = mood;
    }

    catBehavior () {
        return `The ${this.color} cat is ${this.mood}.`;
    }
}

const myCat1 = new Cat("black", 8, "blue", "happy");
const myCat2 = new Cat("grey", 7, "green", "cranky");


console.log(myCat1)
console.log(myCat2)

console.log(myCat1.catBehavior());
console.log(myCat2.catBehavior());