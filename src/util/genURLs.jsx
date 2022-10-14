import config from '../config.json'

export const pokemonListURL = () => `${config.apiEnd}`;

export const pokemonLimitURL = (limit) => `${config.apiEnd}?limit=${limit}`;


