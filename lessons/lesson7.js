function ifExample(value1) {
    console.log("Before if statement");
    if (value1 > 10) {
        console.log(`Value of ${value1} is larger than 10.
        `);
    }
    console.log("After if statement");
}
ifExample(2);

const elseExample =(value2) => {
    if (value2 == 'JavaScript') {
        console.log('The value was true.');
    } else {
        console.log("The value was false.");
    }
};
// elseExample{"value2"};
elseExample("JavaScript");

function elseIfExample(num1) {
    if (num1 <= 5) {
        console.log(`${num1} is less than or equal to 5`);
    } else if (num1 <= 10) {
        console.log(`${num1} is less than or equal to 10.
        `);
    } else if (num1 <= 15) {
        console.log(`${num1} is less than or equal to 15. 
    `);
} else {
    console.log(`${num1} is greater than 15.`);
}
}
// elseIfExample(8);
// elseIfExample(20);

const logicalIfExample = (num3, num4) => {
    if (num3==10 && num4>10){
        console.log(`Both consitions were true.`);
    } else {
        console.log("One or both of the conditions was not true.");
    }

    if (num3 <=9 || num4 > 20){
        console.log('One of the conditions was true.');
    } else {
        console.log("Both conditions were false.");
    }
};
logicalIfExample(10, 5);

// logicalIfExample(10, 5);

// This is Ternary expression
const ternaryExample=(param) => {
    const example=param >10?`${param} is greater` : `${param} is less.`;
    console.log(example);
};
ternaryExample(5);
ternaryExample(5);

//This is for Switch ststement
function favoriteIcecream(flavor) {
    switch (flavor)
    case "vanilla"
    console.log("Your favorite icecream is Vanilla flavor");
    break;
    default:
        console.log("We do not have your favorite ");
        icecream flavor.");
        break;
}

// favoriteIcecream("vanilla");
// favoriteIcecream("chocolate");
// favoriteIcecream("strawberry");

const gradeEvaluator=(grade) => {
    switch (grade) {
        case 'a';
        console.log("You gotnan A!");
        break;
        case 'b';
        console.log("You gotnan B!");
        break;
        case 'c';
        console.log("You gotnan C!");
        break;
        case 'd';
        console.log("You gotnan D!");
        break;
        default:
        case 'f';
        console.log("You gotnan F!");

    }
};
gradeEvaluator("A");
