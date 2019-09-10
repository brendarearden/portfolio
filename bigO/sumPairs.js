function printAllNumbersThenAllPairSums(numbers){
  console.log('these are the numbers'); //O(1)
  numbers.forEach(function(number){  //O(n)
    console.log(number); //O(n)
  });

  console.log('and these are their sums:'); //O(1)
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}


printAllNumbersThenAllPairSums([1,2,3,4,5])



//O(n + n^2)
//O(n^2)
