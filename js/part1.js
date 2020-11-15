
//!---excersice number 1---!

var myArray= [10,5,13,18,51];

//!---excersice number 2---!

function doubleArray(myArray){
   
    var double= new Array(myArray.length);
    
    for(var j in myArray)
    {
        double[j]=myArray[j]*2;
    }

    
    return double;

}

console.log(doubleArray(myArray));

//!---excersice number 3---!

 function isEven(a){
    return (a%2 == 0);
}

function evenArray(myArray){
    var length = myArray.length;
    var even = myArray.filter(isEven);
    return even;

}

console.log(evenArray(myArray));

//!---excersice number 4---!

function smallerThan10(myArray){
   
    var double= new Array(myArray.length);
    var flag= false;
    
    for(var j in myArray)
    {
        if(myArray[j]<10){
            flag=true;
        }
    }
    return flag;
}
console.log(smallerThan10(myArray));

//!---excersice number 5---!
function isMultipleOf3(elem){
    return (elem%3==0);
}

function onlyMultiplesOf3(myArray){

    return myArray.filter(isMultipleOf3);
}

console.log(onlyMultiplesOf3(myArray));

//!---excersice number 6---!
function accumulator(total,curr){

    return (total + curr);
}

function sumOfArray(myArray){

    return myArray.reduce(accumulator,0);

}

var myArray2 = [1.2,2,3,4.9,50.25];
console.log(sumOfArray(myArray2));


//!---excersice number 7---!

function lastTwoElem(myArray){

    return myArray.slice(myArray.length-2,myArray.length);
}

var arrayB = new Array(lastTwoElem(myArray));
for(let i=0;i<arrayB.length;i++){

    console.log(arrayB[i]);
}
