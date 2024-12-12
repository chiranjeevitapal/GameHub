import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import GameFormModal from "./GameFormModal";

const EditGame = ({ gameData, onGameUpdated }) => {
    const { setFormData, setModalOpen } = useContext(GameContext);

    const handleOpenModal = () => {
        setFormData(gameData); // Preload form fields with game data
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleOpenModal}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
                Edit Game
            </button>

            {gameData && (
                <GameFormModal
                    mode="edit"
                    onClose={handleCloseModal}
                    onSubmit={onGameUpdated}
                />
            )}
        </div>
    );
};

export default EditGame;
