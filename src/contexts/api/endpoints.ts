import axiosInstance from 'contexts/api/axiosInstance';

/**
 * GET. Request a list of games
 */
const getGamesList = async (): Promise<any[]> => {
  // const endpoint = `https://api.rawg.io/api/games?key=${key}`;
  const response = await axiosInstance.get('/games');
  return response.data;
};

export {getGamesList};
