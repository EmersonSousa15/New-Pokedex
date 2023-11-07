import axios from "axios";

const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');

res.data.args
console.log(res.data.args);