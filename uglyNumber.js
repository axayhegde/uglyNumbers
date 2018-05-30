//Check if the given number is an ugly Number or not.


function isUgly(number){

    console.log('Checking to see if ' + number + ' is a Ugly Number or not');

    if(number === 0){
        return false;
    }
    if(number === 1){
        return true;
    }
    while(number % 2 === 0){
        number /= 2;
    }
    while(number % 3 === 0){
        number /= 3;
    }
    while(number % 5 === 0){
        number /= 5;
    }
    return number === 1;


}

let myNumber = 200;
if(isUgly(myNumber)){
    console.log(myNumber + ' is an Ugly number');
}else{
    console.log(myNumber + ' is not an Ugly number');
}