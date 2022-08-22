//const noMondays = new Promise( (resolve, reject) => {
//    if(new Date().getDay() !== 1) {
//        resolve("Good, it's not Monday!");
//    } else {
//        reject("Someone has a case of the Mondays!");
//    }
// });
// noMondays
//    .then( res => console.log(res) )
//    .catch( err => console.log(err) );

// TODO rewrite this code to a promise structure
// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
//  }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
      let headsCount = 0;
      let attempts = 0;
      let tooManyAttempts = 100;
  
      while(headsCount < 5 && attempts <= tooManyAttempts ) {
        attempts++;
        let result = tossCoin();
        console.log("{result}");
        console.log("{attempts}");
        if (result === "heads") {
          headsCount++;
      } else {
        headsCount = 0; 
      }
    }
    if ( attempts <= tooManyAttempts ) {
      resolve("It took ${ attempts } to get 5 heads!") 
    } else {
      reject("Sorry, it has taken too many attempts to get 5 heads! You are only allowed ${ tooManyAttempts }");
    }
  });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
