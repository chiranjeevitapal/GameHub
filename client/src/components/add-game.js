import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import GameFormModal from "./GameFormModal";

const AddGame = ({ onGameAdded }) => {
    const { resetForm, setModalOpen } = useContext(GameContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        resetForm(); // Clear the form fields
        setIsModalOpen(true);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalOpen(false);
    };

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={handleOpenModal}
            >
                Add Game
            </button>

            {isModalOpen && (
                <GameFormModal
                    mode="add"
                    onClose={handleCloseModal}
                    onSubmit={onGameAdded}
                />
            )}
        </>
    );
};

export default AddGame;
