function nthLargest(arr,n){
    new_arr = [...arr]
    let max 
    for(let j=0; j<n;j++){
        max = new_arr[0]
        for(let i of new_arr){
            if(i > max){
                max = i
            }
        }
        new_arr.splice(new_arr.indexOf(max),1)
        console.log(new_arr);
        
    }
    return max
}
function nthSmallest(arr,n){
    new_arr = [...arr]
    let min 
    for(let j=0; j<n;j++){
        min = new_arr[0]
        for(let i of new_arr){
            if(i < min){
                min = i
            }
        }
        new_arr.splice(new_arr.indexOf(min),1)
        console.log(new_arr);
        
    }
    return min
}

console.log(nthSmallest([1,2,3,4,5,6],5))
console.log(nthLargest([1,2,3,4,5,6],5))