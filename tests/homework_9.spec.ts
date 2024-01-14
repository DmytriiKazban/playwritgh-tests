// //create async function and print result !!!! through .then block. (3 functions)
//func 1
function qa(qaName, age) {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve((`QA name is ${qaName}, age is ${age}`))
        }, 2000)
    })
}

qa("Dmytrii", "27").then(result => {
    console.log(result);
}).catch(error=>{
    console.error("Wrong", error);
});

//func 2
function calculation(n, m){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve((n+m)/n)
        }, 1000);
    })
}

calculation(10, 20).then(result =>{
    console.log(result)
})

//funct 3
function showArray(arr){
    return new Promise(resolve => {
        setTimeout(() => {
            for (let i = 0; i< arr.length; i++){
                console.log(`Here is the element of array ${i}`)
            }
        }, 6000);
    })
}

showArray([1,2,3,4,5,6,7,8,9,10,11,12]).then(result => {
    console.log(result)
})


//перетворити синхронну (звичайну функцію), яка повертає якесь значення в асинхронну (add await before call), додайти .then block та виведіть значення яке повернулось.
function myName(n){
    return (
        (`Hello, my name is ${n}`)
    )
}

async function myNameAsync(n) {
    const result = await myName(n);
    return result
}

myNameAsync('Dmytrii').then(result =>{
    console.log(result);
})