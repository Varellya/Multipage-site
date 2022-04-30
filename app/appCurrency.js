/*---------- Change Currency ----------*/

const allCurrencyItem = document.querySelectorAll('[data-currency]');
const allProductCost = document.querySelectorAll('.let_cost');
const actualCurrency = document.querySelector('.currency_actual');


allCurrencyItem.forEach(currencyItem => {
    currencyItem.addEventListener('click', event => {
        let activeCurrency = event.currentTarget;
        let currencyIcoName = activeCurrency.getAttribute('data-currency');
        currencyIcoName = String(currencyIcoName);
        let currencyNameNext = activeCurrency.textContent;

        let actualCurrencyName = actualCurrency.textContent;
        actualCurrencyName = String(actualCurrencyName);


        if ((actualCurrencyName === 'GBP') && (currencyIcoName === 'usd')) {
            n = 1.27;
        } else if ((actualCurrencyName === 'GBP') && (currencyIcoName === 'eur')) {
            n = 1.19;
        } else if ((actualCurrencyName === 'USD') && (currencyIcoName === 'gbp')) {
            n = 0.7874015748031496;
        } else if ((actualCurrencyName === 'USD') && (currencyIcoName === 'eur')) {
            n = 0.93;
        } else if ((actualCurrencyName === 'EUR') && (currencyIcoName === 'gbp')) {
            n = 0.8403361344537815;
        } else if ((actualCurrencyName === 'EUR') && (currencyIcoName === 'usd')) {
            n = 1.075268817204301;
        } else {
            n = 1;
        }


        let x = n;
        x = Number(x);

        allProductCost.forEach(actualProductCost => {
            productCostSize = actualProductCost.textContent;
            productCostSize = Number(productCostSize);
            newProductCost = productCostSize * x;
            newProductCost = newProductCost.toFixed(2);

            actualProductCost.textContent = newProductCost;
        })

        let currencyIcoActual = document.querySelectorAll('.active_currency');
        currencyIcoActual.forEach(item => {
            item.classList.remove('active_currency');
        });

        let allCurrencyIcoNext = document.getElementsByClassName(currencyIcoName);
        let arrayCurrencyIcoNext = Array.from(allCurrencyIcoNext);
        arrayCurrencyIcoNext.forEach(currencyIcoNext => {
            currencyIcoNext.classList.add('active_currency');
        });

        actualCurrency.textContent = currencyNameNext;
    })
})




