function superbowlWin(finder){
    for (const record of finder)
        if(record.result === "W"){
    return(record.year)
    }
}
console.log(record.find(superbowlWin))

// function blueFilter (collection) {
//     for (const user of collection) {
//       if (user.favoriteColor === 'Blue') {
//         console.log(user.firstName);
//       }
//     }
//   }