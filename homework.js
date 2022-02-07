//------------------------- HOMEWORK -----------------------------
// Iz cas02/practice.js prekopirati domaci i napraviti objekat koji 
// sadrzi 4 metode. Te 4 metode su metode koje su bili za prosli domaci.
// Zatim pozvati sve 4 metoda radi testiranja sa podacima.
const obj = {
    printArray:
    function (arr){
        for(el in arr)
        console.log(arr[el])
    },
  
    evenArray:function(arr){
        arr = arr.filter((element) => {
            if(element%2==0){
                return true
            }
            return false
        })
        console.log(arr)
    } 
  
    ,
    sumArray:function(arr){
        var sum = 0;
        arr.forEach((element) => {
            sum+=element;
        });
        return sum;
    },
    biggerThanFirst:function(arr){
        var bigger = 0
        var first = arr[0];
        arr.slice(1).map(el => { 
            if(el > first){
                bigger++;
            }
        })
        return bigger
    }
}

console.log(obj.sumArray([1,2,3]))
console.log(obj.printArray([1,2,3]))
console.log(obj.evenArray([1,2,3]))
console.log(obj.biggerThanFirst([1,2,3]))