import React, { useContext, useEffect, useState } from "react";
import GameFormModal from "./GameFormModal";
import { fetchGames, addGame, updateGame } from "../services/gameService";
import { GameContext } from "../context/GameContext";

const Games = () => {
    const { games, setGames, setFormData } = useContext(GameContext);
    const [modalMode, setModalMode] = useState(""); // "add" or "edit"
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {   
        const loadGames = async () => {
            const gamesData = await fetchGames();
            setGames(gamesData);
        };
    
        loadGames();
    }, []);

    const handleAddGame = () => {
        setModalMode("add");
        setModalOpen(true);
    };

    const handleEditGame = (game) => {
        setFormData(game);
        setModalMode("edit");
        setModalOpen(true);
    };

    const handleSubmit = async (data) => {
        if(modalMode === 'add') {
            addGame(data);
        } else {
            updateGame(data.gameId, data);
        }

        const formDataObject = new FormData();
        Object.keys(data).forEach((key) => formDataObject.append(key, data[key]));

        await fetch(url, { method, body: formDataObject });
        await fetchGames();
    };

    return (
        <div className="container mx-auto p-6">
            <button
                onClick={handleAddGame}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Add Game
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                    <div
                        key={game.gameId}
                        onClick={() => handleEditGame(game)}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer"
                    >
                        <img
                            src={game.image}
                            alt={game.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-bold">{game.name}</h3>
                            <p className="text-gray-600">Downloads: {game.downloads}</p>
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <GameFormModal
                    mode={modalMode}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Games;
