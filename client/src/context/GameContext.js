import React, { createContext, useState, useCallback } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const genres = ["Adventure", "Racing", "Fantasy", "Horror", "Sci-Fi", "Survival"];

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        genre: "",
        image: null,
    });

    // Stable resetForm function using useCallback
    const resetForm = useCallback(() => {
        setFormData({
            name: "",
            description: "",
            genre: "",
            image: null,
        });
    }, []);

    return (
        <GameContext.Provider
            value={{
                games,
                setGames,
                genres,
                modalOpen,
                setModalOpen,
                formData,
                setFormData,
                resetForm,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
