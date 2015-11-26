function uniq(arr){

var arr2 = [];

for(var i = 0; i < arr.length; i++)
  {
    if(arr2.indexOf(arr[i]) === -1)
    {arr2.push(arr[i])}

  }
  console.log(arr2);
return arr2;
}

uniq([4, 5, 6, 6, 4])



function twoSum(arr, target){

var arr2= [];

for(var i = 0; i < arr.length; i++)
{

  for( var j = i + 1; j < arr.length; j++)
    {if(arr[i] + arr[j] === target)
    {arr2.push([i, j])}
  }

}
console.log(arr2);
return arr2;

}


twoSum([0, 0, 2, -2, 1], 3)

twoSum([0, 0, 2, -2, 1], 0)


function transpose(arr)
{ var fillingArray;
  var arr2 = [];

  for(var i = 0; i < arr[0].length; i++)
    { fillingArray = []
      for(var j = 0; j < arr.length; j++)
      {
        fillingArray.push(arr[j][i])

      }
      arr2.push(fillingArray)


    }
    console.log(arr2)
    return arr2

}


transpose([[0,1,2], [3,4,5], [6,7,8]])


function myEach(arr, callBack){
  for(var x = 0; x < arr.length; x ++) {

    callBack(arr[x]);

  }

}

myEach([[0, 0, 2, -2, 1]], function(ele){
  twoSum(ele, 3)
})



function myMap(arr, callBack) {

    var mapArr = []

    myEach(arr, function(ele){
      mapArr.push(callBack(ele))
    });

    console.log(mapArr);
    return mapArr;

}

myMap([0,1,2], function(ele){return(++ele)});
