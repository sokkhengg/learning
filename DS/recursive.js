function countDown(num) {
  if (num <= 0) {
    console.log("All done!")
    return;
  }
  console.log(num)
  num--;
  countDown(num);
}

// the regular way
function countDown(num) {
  for(let i = num; i > 0; i--){
    console.log(i)
  }
  console.log("All done!")
}

countDown(5);

// second recursive function

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}

sumRange(3)

// factorial iteratively

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
}

// factorial recursively

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(5)

// recursion with helper method

function collectOddValue(arr){

  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2!== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

collectOddValue([1,2,3,4,5,6,7,8,9])

// helper method recursion tamplate

function outer(input){

  let outerScopedVariable = []

  function helper(helperInput){
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable;

}

// collect odd value using pure recursion

function collectOddValue(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValue(arr.slice(1)));
  return newArr;
}