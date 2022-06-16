//1 

let filterOutOdds = (...arguements) => nums.filter(num => num % 2 === 0)

//2 

let findMin = (...nums) => nums.reduce((min, next) => min < next ? min : next);

//3 

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//4 

doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(num => num*2)]);

//5 

let removeRandom = items => {
    let random = Math.floor(Math.random() * items.length)
    return [...items.slice(0, random), ...items.slice(random + 1)]
}

//6 

let extend = (array1, array2) => [...array1, ...array2];

//7 

let addKeyVal = (obj, key, val) => ({...obj, [key]: val})

//8

let removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

//9 

let combine = (obj1, obj2) => ({...obj1, ...obj2});

//10

let update = (obj, key, val) => ({...obj, [key]: val})