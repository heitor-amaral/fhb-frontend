import axios from 'axios';

const instace = axios.create({
  baseURL: 'https://fantasy-home-brewery.herokuapp.com/api/v1',
});

export default instace;
