// ARROW FUNCTION

//1. Print odd numbers in an array
var array=(arr)=>{
    var res=arr.filter((ele)=>ele%2!==0);
    return res;
  }
  console.log(array([1,2,3,4,5,6,7,8,9,10]))

 // 2.Convert all the strings to title caps in a string array
 var titleCase=(str)=>{
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(titleCase("guvi geek"));

  //3. Sum of all numbers in an array
  var sum=(arr)=>{
    let res=arr.reduce((accu,curr)=>accu+curr,0);
    return res;
  }
  console.log(sum([1,2,3,4,5,6,7,8,9]))
  
  // 4.Return all the prime numbers in an array
  var primeNumber=(arr)=>{
    var res=[];  
   for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2!==0&&arr[i]%3!==0&&arr[i]!==0){
    res.push(arr[i]);
   }
   }
  return res;
  }
  console.log(primeNumber([6,7,8,9,10,11,12,13,14,15]));
  
  // 5.Return all the palindromes in an array
  var palindromes=(arr)=>{
    let res=[];
  for(var str of arr){
  var str1=str.split("").reverse().join("");
  if(str===str1){
    res.push(str);
  }
  }
  return res;
  }
  console.log(palindromes(["radar","last","noon"]));