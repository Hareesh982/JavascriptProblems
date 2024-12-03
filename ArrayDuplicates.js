let arr = [1,2,2,3,3,3,4,4,4,4,5,6,7,7,8,9]
n = arr.length

// identifying the duplicates in an array

let duplicates = []
let value
for(let i=0;i<n;i++){
    if(i!=arr.lastIndexOf(arr[i])){
        value = arr[arr.lastIndexOf(arr[i])]
        if(duplicates.includes(value)){
            continue
        }
        duplicates.push(value)
    }
}
console.log(duplicates);
console.log(arr);

// frequency of an array

frequency = {}
for(let i of arr){
    if(frequency[i] == undefined){
        frequency[i] = 1
    }
    else{
        frequency[i]++
    }
}
console.log(frequency);

// removing duplicates from an array

for(let i=0;i<arr.length;i++){
    while(i != arr.lastIndexOf(arr[i])){
        arr.splice(arr.lastIndexOf(arr[i]),1)
    }
}
console.log(arr);


