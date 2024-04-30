const note = () => {
  console.log("This is showm after 2 seconds.");
};

//setTimeout(note, 5000);

// setTimeout(() => {
//  console.log("An arrow function is called in 4 seconds.");
// }, 4000);





//const myPromise = new Promise((resolve, reject) => {
  //  let num = 0;
    //setTimeout(() => {
      // if (num>10) {
        //resolve(num);
      //} else{
        //reject("Promise value is not high enough.")
    //}
//}, 5000);
//});

//myPromise
  //.then((value) => {
   // console.log(`Successful promise: the result is ${value}.`);
//})
 //.catch((error) => {
   // console.log(error);
//});
//console.log(myPromise);

const delayForAMoment = (delta) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Async resolved ${delta}`);
        }, 6000);
    });
};

const myAsync = async (echo) => {
    try {
        console.log("Calling delay");
        const result = await delayForAMoment(echo);
        console.log(result);  
    } catch (error) {
        console.log(error);
    };   
};

myAsync("Now");
myAsync("Shortly");
myAsync("Soon");