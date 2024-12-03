function fibonacci(num){
    if(num<1){return "Invalid input"}

    let n1 = 0
    let n2 = 1

    for(let i=0;i<num;i++){
        console.log(n1)
        let n3 = n1 + n2
        n1 = n2
        n2 = n3
    }
}

fibonacci(5)

console.log("\n");


// recursivly


function fibonacci_recursive(num,n1 = 0,n2 = 1){
    if(num<1){
        return "Invalid input"
    }
    if(num==1){
        console.log(n1)
        return
    }
    console.log(n1)
    fibonacci_recursive(num-1,n2,n1 + n2)
    
}

fibonacci_recursive(5)