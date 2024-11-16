var n;
n = window.prompt("garaas oruul:", 200);
var parseInt(n)
var sum = 0;
while (n !== 0) {
    sum = sum + n%10;
    n= Math.floor(n/10);
    console.log(n);
}
document.write("result :" +sum);