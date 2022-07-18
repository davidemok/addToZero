let arrayOne = [0, 21, 33, 6, 0, -9]
let arrayTwo = [0, 21, 33, 6, 0, -9]
let arrayThree = [0, 1, 2, 3, 4, 5]
let zerosum = false
for(i=0; i<arrayOne.length; i++){
    for(p=0; p<arrayOne.length; p++){
    if(arrayOne[i] + arrayOne[p] === 0 && i != p){
        zerosum = true
    }
    }
}
console.log(zerosum)
