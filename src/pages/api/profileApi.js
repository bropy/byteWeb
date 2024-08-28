import axios from 'axios';

const API_BASE_URL_PROFILES = 'https://byteserver-b28593dfb543.herokuapp.com/profiles';
const API_BASE_URL_USERS = 'https://byteserver-b28593dfb543.herokuapp.com/users';
const API_BASE_URL_GAMES = 'https://byteserver-b28593dfb543.herokuapp.com/games/user';
const API_BASE_URL_USERS_FRIENDS = 'https://byteserver-b28593dfb543.herokuapp.com/users/friendsOf';
const API_BASE_URL_MEDIA_COUNTER = 'https://byteserver-b28593dfb543.herokuapp.com/media/media-counter';

export const fetchData = async (endpoint = '') => {
  try {
    // Fetch the main profile, user, and games data
    const [profilesResponse, usersResponse, gamesResponse, friendsResponse, mediaCounterResponse] = await Promise.all([
      axios.get(API_BASE_URL_PROFILES + endpoint),
      axios.get(API_BASE_URL_USERS + endpoint),
      axios.get(API_BASE_URL_GAMES + endpoint),
      axios.get(API_BASE_URL_USERS_FRIENDS + endpoint),
      axios.get(API_BASE_URL_MEDIA_COUNTER + endpoint)
    ]);

    const profileData = profilesResponse.data;
    const userData = usersResponse.data;
    const gamesData = gamesResponse.data;
    const friendsData = Array.isArray(friendsResponse.data) ? friendsResponse.data : []; // Ensure it's an array
    const mediaCounterData = mediaCounterResponse.data;

    console.log('Profile data:', profileData);
    console.log('User data:', userData);
    console.log('Games data:', gamesData);
    console.log('Friends data:', friendsData);
    console.log('Media counter data:', mediaCounterData);

    // Initialize favoriteGame
    let favoriteGame = null;
    if (gamesData && gamesData.length > 0) {
      const sortedGames = [...gamesData].sort((a, b) => b.playtimeHours - a.playtimeHours);
      favoriteGame = sortedGames[0];
    }

    // Combine all data
    const combinedData = {
      ...profileData,
      ...userData,
      games: gamesData,
      favoriteGame: favoriteGame,
      friendsProfiles: friendsData, // Use friendsData directly
      mediaCounter: mediaCounterData
    };

    return combinedData;
  } catch (error) {
    console.error('Error fetching data:', error.response || error);
    throw error;
  }
};
