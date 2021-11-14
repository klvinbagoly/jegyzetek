var amount1 = 1;
let amount2 = 2;
function showAmount (){
    var amount1 = 3;
    let amount2 = 4;
    console.log(amount1)
    console.log(amount2)
    console.log(window.amount1)
}
showAmount()