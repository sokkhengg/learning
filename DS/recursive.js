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