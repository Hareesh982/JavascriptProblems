function stringFrequency(str){
    let frequency = {}

    for(let i of str){
        if(frequency[i] == undefined){
            frequency[i] = 1
        }
        else{
            frequency[i]++
        }
    }
    return frequency
}


let str = "hareesh"
console.log(JSON.stringify(stringFrequency(str),null,4))