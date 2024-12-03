let arr = [1,2,2,3,3,3,4,4,4,4,4]
for(let i=0;i<arr.length;i++){
    while(i != arr.lastIndexOf(arr[i])){
        arr.splice(arr.lastIndexOf(arr[i]),1)
    }
}
console.log(arr);




