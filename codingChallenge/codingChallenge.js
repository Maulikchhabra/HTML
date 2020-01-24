//Bills at the restaurant//
var onlyBill =[124,48,268];

//Function =tip calculator//
function tipCalculator(bill) {
  var percentge;
  if(bill<50){
    percentge =.2;
  }
  else if(bill>50 && bill<200){
    percentge =.15;
  }
  else
    percentge =.10;

  return percentge*bill;
}

//Function calling//
var tip1 =tipCalculator(onlyBill[0]);
var tip2 =tipCalculator(onlyBill[1]);
var tip3 =tipCalculator(onlyBill[2]);

//Tips and final paid array//
var tipsPaid =[tip1,tip2,tip3];
var totalBill =[onlyBill[0]+tip1,onlyBill[1]+tip2,onlyBill[2]+tip3];
console.log(tipsPaid);
console.log(totalBill);
