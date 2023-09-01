import FetchWrapper from "./fetch-wrapper.js";

const key = "4d46a45b4a63af8d1fe2edf8";
const exchangeAPI = new FetchWrapper(`https://v6.exchangerate-api.com/v6/${key}`);

const baseSelect = document.querySelector("#base-currency");
const targetSelect = document.querySelector("#target-currency");








