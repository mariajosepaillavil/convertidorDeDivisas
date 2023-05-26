//Se utilizará Fetch

/*
function calculate(){
    fetch('items.json')
    .then(res => res.json())
    .then(data =>console.log(data)
    );
}

calculate();
*/

//Utilizando API Pública.

const currencyElement_one=document.getElementById('currency-one');
const currencyElement_two=document.getElementById('currency-two');
const quantityElement_one=document.getElementById('quantity-one');
const quantityElement_two=document.getElementById('quantity-two');

const changeElement=document.getElementById('change');

//Fetch exchange rate and Update the DOM.
function calculate(){

    //console.log('Funcionó');

    const currency_one=currencyElement_one.value;
    const currency_two=currencyElement_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const change=data.rates[currency_two];


        changeElement.innerText=`1 ${currency_one} = ${change} ${currency_two}`;
    
        quantityElement_two.value = (quantityElement_one.value * change).toFixed(2);
    } );

}

//Event listeners.

currencyElement_one.addEventListener('change', calculate);
quantityElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
quantityElement_two.addEventListener('input', calculate);

change.addEventListener('click', () =>{
    const temp = currencyElement_one.value;
    currencyElement_one.value = currencyElement_two.value;
    currencyElement_two.value = temp;
    calculate();
} );


calculate();