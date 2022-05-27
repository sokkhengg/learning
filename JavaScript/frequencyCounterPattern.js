function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

// ([1,2,3,2], [9,1,4,4])

// refactor code

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// ([1,2,3,2,5], [9,1,4,4,11])

// valid anagram

function validAnagram(word1, word2) {
    let counter = {}

    if (word1.length !== word2.length) {
        return false
    } else {
        for (let char of word1) {
            counter[char] ? (counter[char] += 1) : (counter[char] = 1)
        }

        for (let char of word2) {
            counter[char] ? (counter[char] -= 1) : false
        }

        for (let key in counter) {
            if (counter[key] !== 0) {
                return false
            }
        }
     }
     return true
}

// trying the second solution

function validAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < word1.length; i++) {
        let letter = word1[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)

    for (let i =0; i < word2.length; i++) {
        let letter = word2[i]
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true;
}