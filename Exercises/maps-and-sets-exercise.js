//1 
// What does the following code return?

// new Set([1,1,2,2,3,4])

// {1,2,3,4}

//2 
// What does the following code return?

// [...new Set("referee")].join("")

// "ref"

//3 
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// Map(2) {Array(3) => true, Array(3) => false}

//4 
// let hasDuplicate = arr => new Set(arr).size !== arr.length

function hasDuplicate(arr){
    return new Set(arr).size !== arr.length
}

//5
// function vowelCount(str){
//     let vowel = 'aeiou'
//     return new Map()
// }

function isVowel(char){
    return 'aeiou'.includes(char)
}

function vowelCount(str){
    const vowelMap = new Map()
    for (let char of str){
        let lower = char.toLowerCase()
        if(isVowel(lower)){
            if(vowelMap.has(lower)){
                vowelMap.set(lower, vowelMap.get(lower) + 1)
            }
            else {
                vowelMap.set(lower, 1)
            }
        }
    }
    return vowelMap;
}