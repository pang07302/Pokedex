import config from '../config.json'

export const pokemonListURL = (amount) => `${config.apiEnd}?limit=${amount}`;


