import axiosInstance from 'contexts/api/axiosInstance';

/**
 * GET. Request a list of games
 */
const getGamesList = async () => {
  // const endpoint = `https://api.rawg.io/api/games?key=${key}`;
  const response = await axiosInstance.get('/games');
  console.log('RES ', response.data);
};

// : Promise<TGameData[]>

export {getGamesList};
