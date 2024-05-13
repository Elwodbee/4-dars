const num = +prompt("Randomda chiqqan son");
if (num % 3 == 0 && num % 5 ==0 ){
    alert("FizzBuzz")
}else if(num % 5 == 0){
    alert("Buzz");
}else if(num % 3 == 0){
   alert("Fizz");
}
else{
    alert("Siz kiritgan son Fizz ham emas va Buzz ham emas")
}