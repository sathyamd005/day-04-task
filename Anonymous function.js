// anonymous function

//1. Print odd numbers in an array
var array=function(arr){
    var res=arr.filter((ele)=>ele%2!==0);
    return res;
  }
  console.log(array([1,2,3,4,5,6,7,8,9,10]))
  
  // 2.Convert all the strings to title caps in a string array
  var titleCase=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(titleCase("guvi geek"));
  
  //3. Sum of all numbers in an array
  var sum=function(arr){
    let res=arr.reduce((accu,curr)=>accu+curr,0);
    return res;
  }
  console.log(sum([1,2,3,4,5,6,7,8,9]))
  
  // 4.Return all the prime numbers in an array
  var primeNumber=function(arr){
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
  var palindromes=function(arr){
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
  
  // 6.Return median of two sorted arrays of the same size.
  var median=function(ar1,ar2){
    var array=[...ar1,...ar2];
    array=array.sort(function(a,b){return a-b});
    var num=array.length/2;
    var m=(array[num-1]+array[num])/2;
    return m;
    }
    console.log(median( [1, 12, 15, 26, 38],[2, 13, 17, 30, 45]))
  
  // 7.Remove duplicates from an array
  let res=[];
  var duplicates=function(arr){
  for(var i in arr){
    for(var j=parseInt(i)+1;i<=arr.length;i++){
      if(arr[i]===arr[j]){
        res.push(arr[i])
        break;
      } 
      break;
    }
  }
  return res;
  }
  console.log(duplicates([1,2,2,3,4,4,5,5]))
  
  // 8.Rotate an array by k times
  var Rotate=function(arr,k){
    var result=[]; 
    for(var i=1;i<=k;i++){
       result.push(arr.pop());
      var res=arr.slice(0);
      res=result.concat(res);
      arr=res;
      result=[];
    }
    return res;
    }
    console.log(Rotate([1,2,3,4,5],4))
  