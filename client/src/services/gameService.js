const API_URL = "http://localhost:3100/api/games";

// Fetch all games
export const fetchGames = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

// Add a new game with image upload support
export const addGame = async (gameData) => {
    const formData = new FormData();

    // Append all fields (including image) to FormData
    Object.keys(gameData).forEach((key) => {
        formData.append(key, gameData[key]);
    });

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData, // FormData is sent directly
    });

    return await response.json();
};

// Update an existing game
export const updateGame = async (gameId, gameData) => {
    const formData = new FormData();

    // Append all fields (including image) to FormData
    Object.keys(gameData).forEach((key) => {
        formData.append(key, gameData[key]);
    });

    const response = await fetch(`${API_URL}/${gameId}`, {
        method: "PUT",
        body: formData, // FormData is sent directly
    });

    return await response.json();
};
