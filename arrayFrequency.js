
function arrayFrequency(arr){
    let frequency = {}

    for(let i of arr){
        if(frequency[i] == undefined){
            frequency[i] = 1
        }
        else{
            frequency[i]++
        }
    }
    return frequency
}
let arr = [1,2,3,3,3,3,3,3,3,4,4,4,5,5,5,2,2,1,1,1,1,0,1,0,3,5]

console.log(JSON.stringify(arrayFrequency(arr),null,4))
