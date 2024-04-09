//Homeowrk Task One
const age = 32
    if(age==32) {
        console.log("You are the winner");
    }
else if(age>=30) {
    console.log("You're almost there!");
} else {
    console.log("Sorry, try again.");
}

//Homework Task Two
const gradeEvaluator = (grade) => {
    switch (grade) {
        case 'E': console.log("Excellent");
        break;
        case 'V': console.log("Very Good");
        break;
        case 'G': console.log("Good");
        break;
        case 'A': console.log("Average");
        break;
        case 'F' : console.log('Fail');
        
        default: console.log('Not a valid grade');
    }
}
gradeEvaluator("B");