import axios from 'axios';

const REACT_APP_YouTube_Keys = [
  'AIzaSyCHonY2KUGSqrrcAftRyc8Tn2dcjeLQrAs',
  'AIzaSyBZ9Y_xXoHEb0XrOvteXv5Vhxwp5Rp-Z6Y',
  'AIzaSyCWo9XIqRMjmBf-9jyJf_aFnCp6jMl-zHI',
];

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started
export const selectRandomKey = () => {
  const keys = REACT_APP_YouTube_Keys; //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number
  return keys[random];
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    videoCategoryId: '10',
    type: 'video',
    key: selectRandomKey(),
  },
});
