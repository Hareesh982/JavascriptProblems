let arr = [1,2,2,3,3,3,4,4,4,4,5,6,7,7,8,9]
n = arr.length

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
console.log("Frequency of an array : ",frequency);

// finding the duplicates in an array using frequency

arr_dup_freq = []
for(let key of Object.keys(frequency)){
    if(frequency[key]>1){
        arr_dup_freq.push(parseInt(key))
    }
}
console.log("Array duplicates using frequency : ",arr_dup_freq);

// finding the unique elements in an array using frequency

arr_unq_freq = []
for(let key of Object.keys(frequency)){
    arr_unq_freq.push(parseInt(key))
}
console.log("Unique elements using frequency : ",arr_unq_freq);

// finding the duplicates in an array

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
console.log("Finding duplicates : ",duplicates);

// removing duplicates from an array

for(let i=0;i<arr.length;i++){
    while(i != arr.lastIndexOf(arr[i])){
        arr.splice(arr.lastIndexOf(arr[i]),1)
    }
}
console.log("Removing duplicates : ",arr);


