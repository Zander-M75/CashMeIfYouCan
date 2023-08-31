import FetchWrapper from "./fetch-wrapper.js";

const key = "4d46a45b4a63af8d1fe2edf8";
const endpoint = "/latest/USD"; //USD as example for now

const exchangeAPI = new FetchWrapper(`https://v6.exchangerate-api.com/v6/${key}`)


exchangeAPI.get(endpoint)
.then(data => {
    console.log(data)
})


