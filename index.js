import FetchWrapper from "./fetch-wrapper.js";

const key = "4d46a45b4a63af8d1fe2edf8";
const exchangeAPI = new FetchWrapper(`https://v6.exchangerate-api.com/v6/${key}`);



const base = document.querySelector("#base-currency");
const target =  document.querySelector("#target-currency");
const result =  document.querySelector("#target-result");

const getConversion = () => {
    exchangeAPI.get(`/latest/${base.value}`)
    .then(data => {
        console.log(data.conversion_rates)
        result.textContent = data.conversion_rates[target.value]
    })
};

base.addEventListener("change", () => {
    getConversion()
})


target.addEventListener("change", () => {
    getConversion()
})




