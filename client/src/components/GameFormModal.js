import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

const GameFormModal = ({ mode, onClose, onSubmit }) => {
    const { genres, formData, setFormData, resetForm } = useContext(GameContext);

    useEffect(() => {
        if (mode === "add") resetForm();
    }, [mode, resetForm]);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">
                    {mode === "edit" ? "Edit Game" : "Add New Game"}
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Genre Field */}
                    <div className="mb-4">
                        <label htmlFor="genre" className="block mb-2 text-gray-700">
                            Genre
                        </label>
                        <select
                            id="genre"
                            value={formData.genre || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        >
                            <option value="" disabled>
                                Select Genre
                            </option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block mb-2 text-gray-700">
                            Upload Image
                        </label>
                        {formData.image && (
                            <img
                                src={
                                    typeof formData.image === "string"
                                        ? formData.image
                                        : URL.createObjectURL(formData.image)
                                }
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-lg mb-2"
                            />
                        )}
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border rounded-lg file:py-2 file:px-3 file:bg-blue-500 file:text-white"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {mode === "edit" ? "Save Changes" : "Add Game"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GameFormModal;
