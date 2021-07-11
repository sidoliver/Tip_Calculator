const bill = document.getElementById("bill");
const tips = document.querySelectorAll("button");
const customTip = document.querySelector(".custom-tip");
const people = document.getElementById("people");
const tipTotal = document.querySelector('.tip-total');
const billTotal = document.querySelector('.bill-total');
const reset = document.querySelector('.reset');
customTip.addEventListener('mouseOut',calculateTotal(customTip));
tips.forEach((tip) => {
  tip.addEventListener("click", function () {

    calculateTotal(tip);
  });
});

function calculateTotal(tip) {
  if(bill.value === '' || people.value === '') {
    return;
  }
  const billAmount = parseInt(bill.value);
  const tipPercent = tip.innerText;
  const tipAmount = parseInt(tipPercent.slice(0, -1));
  const totalPeople = parseInt(people.value);
  const totalAmount = billAmount / totalPeople;
  const totalTip = totalAmount * (tipAmount / 100);
  tipTotal.innerText = `$ ${totalTip}`
  billTotal.innerText = `$ ${totalAmount}`
}
// reset button
reset.addEventListener('click',function () {
   tipTotal.innerText = '$ 0.00';
   billTotal.innerText = '$ 0.00';
   bill.value = '';
   people.value = '';
   customTip.value = '';
})
