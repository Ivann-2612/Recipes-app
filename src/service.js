import axios from 'axios'

const BASE_URL = 'https://forkify-api.herokuapp.com/api/search?q='
const PIZZA = 'pizza'
const PASTA = 'pasta'
const MEAT = 'steak'
const SEAFOOD = 'seafood'
const FISH = 'fish'


export const getAllPizzas = () => {
    return axios.get(BASE_URL + PIZZA)
}
export const getAllPastas = () => {
    return axios.get(BASE_URL + PASTA)
}
export const getAllMeats = () => {
    return axios.get(BASE_URL + MEAT)
}
export const getAllSeafood = () => {
    return axios.get(BASE_URL + SEAFOOD)
}
export const getAllFish = () => {
    return axios.get(BASE_URL + FISH)
}