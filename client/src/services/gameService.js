const API_URL = "http://localhost:3100/api/games";

export const fetchGames = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const addGame = async (gameData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: gameData,
    });
    return await response.json();
};

export const updateGame = async (gameId, gameData) => {
    const response = await fetch(`${API_URL}/${gameId}`, {
        method: "PUT",
        body: gameData,
    });
    return await response.json();
};
