import './App.css';
import React from "react";
import { GameProvider } from "./context/GameContext";
import Games from './components/games';

const App = () => (
    <GameProvider>
        <Games />
    </GameProvider>
);

export default App;