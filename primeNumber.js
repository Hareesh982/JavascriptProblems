function isNotPrime(num){
    return `${num} is not prime`
}
function isPrime(num){
    return `${num} is prime`
}

function isPrimeNumber(num){
    let prime =  1
    if(num<=1){return isNotPrime(num)}
    if(num==2){return isPrime(num)}
    if(num%2==0){return isNotPrime(num)}
    for(let i=3;i<num;i++){
        if(num%i==0){
            prime = 0
        }
    }
    if(prime==0){
        return isNotPrime(num)
    }
    else{
        return isPrime(num)
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
for(let i of arr){
    console.log(isPrimeNumber(i))
}