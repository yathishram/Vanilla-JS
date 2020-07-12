const currenyEle_one = document.getElementById('currency-one');
const currenyEle_two = document.getElementById('currency-two');
const amountEle_one = document.getElementById('amount-one');
const amountEle_two = document.getElementById('amount-two');
const rateEle = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchange rates
const calculate = () => {
  const currency_one_data = currenyEle_one.value;
  const currency_two_data = currenyEle_two.value;
  let rate;
  fetch(`https://v6.exchangerate-api.com/v6/5f670ac16c928fb1504257b1/latest/${currency_one_data}`)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      rate = data.conversion_rates[currency_two_data];
      rateEle.innerText = `1 ${currency_one_data} = ${rate} ${currency_two_data}`;

      amountEle_two.value = (amountEle_one.value * rate).toFixed(2);
    });
};

//event listeneres
currenyEle_one.addEventListener('change', calculate);
currenyEle_two.addEventListener('change', calculate);
amountEle_one.addEventListener('input', calculate);
amountEle_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currenyEle_one.value;
  currenyEle_one.value = currenyEle_two.value;
  currenyEle_two.value = temp;
  calculate();
});
