// var n = parseInt(window.prompt("Toog oruulna uu", 0));
// function fact(n) { 
//     // var a = 1; 
//     if (n < 0) {
//         return todorhoigui;
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     for (var i = 2; i <= n; i++) 
//         res = a * i; 
//     return a; 
//     return n * factorial(n - 1);
// }
// document.write("Factoriol ni " + n);
var n = parseInt(window.prompt("Factorial-ийн тоог оруулна уу", 0));
// factotial функц
function fact(n) { 
    if (n < 0) {
        return "Сөрөг тоонд factorial тодорхойлогдохгүй";
    }
    // 0 бол 1 буцаана
    if (n === 0 || n === 1) {
        return 1;
    }

    

    return n* fact(n-1);
}
alert("Factorial: " + fact(n));

