const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 3100;
// CORs
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(express.static("public"));
// In-memory list of games
let games = [
    {
      gameId: 1,
      name: "Hero's Journey",
      image: "/images/heros-journey.png",
      downloads: 240000,
      genre: "Adventure",
      description: "Embark on an epic quest to save the kingdom and defeat mythical creatures."
    },
    {
      gameId: 2,
      name: "Haunted Manor",
      image: "/images/haunted-manor.png",
      downloads: 190000,
      genre: "Horror",
      description: "Explore a spooky manor filled with ghostly mysteries and dark secrets."
    },
    {
      gameId: 3,
      name: "Dragon Slayer",
      image: "/images/dragon-slayer.png",
      downloads: 280000,
      genre: "Fantasy",
      description: "Battle fierce dragons and save the realm in this high-stakes adventure."
    },
    {
      gameId: 4,
      name: "Neon Racers",
      image: "/images/neon-racers.png",
      downloads: 350000,
      genre: "Racing",
      description: "Race through neon-lit cities in high-speed, futuristic cars."
    },
    {
      gameId: 5,
      name: "Mystic Sorcerer",
      image: "/images/mystic-sorcerer.png",
      downloads: 270000,
      genre: "Fantasy",
      description: "Wield powerful spells to defeat dark forces and restore balance to the world."
    },
    {
      gameId: 6,
      name: "Space Marine Saga",
      image: "/images/space-marine-saga.png",
      downloads: 320000,
      genre: "Sci-Fi",
      description: "Lead an elite squad of space marines in battles across alien planets."
    },
    {
      gameId: 7,
      name: "Offroad Mayhem",
      image: "/images/offroad-mayhem.png",
      downloads: 310000,
      genre: "Racing",
      description: "Conquer rugged terrains and extreme off-road tracks in powerful vehicles."
    },
    {
      gameId: 8,
      name: "Enchanted Realms",
      image: "/images/enchanted-realms.png",
      downloads: 300000,
      genre: "Fantasy",
      description: "Explore enchanted lands filled with magical creatures and hidden treasures."
    },
    {
      gameId: 9,
      name: "Pirate's Treasure",
      image: "/images/pirates-treasure.png",
      downloads: 330000,
      genre: "Adventure",
      description: "Sail the seas, hunt for treasure, and outwit rival pirates in thrilling adventures."
    },
    {
      gameId: 10,
      name: "Aftermath Survival",
      image: "/images/aftermath-survival.png",
      downloads: 250000,
      genre: "Survival",
      description: "Survive in a post-apocalyptic world filled with dangers and scarce resources."
    }
  ];
  
// Serve images in the "public/images" folder
app.use("/images", express.static("images"));

// Helper function to generate a clean file name from game name
const generateFileName = (gameName, originalName) => {
    const cleanName = gameName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .trim();
    const ext = path.extname(originalName);
    return `${cleanName}-${Date.now()}${ext}`;
};

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        const { name } = req.body;
        const fileName = generateFileName(name || "game", file.originalname);
        cb(null, fileName);
    },
});
const upload = multer({ storage });

// API: Get all games
app.get("/api/games", (req, res) => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const updatedGames = games.map((game) => ({
        ...game,
        image: game.image.startsWith("http") ? game.image : `${baseUrl}${game.image}`,
    }));
    res.json(updatedGames);
});

// API: Add a new game with image upload
app.post("/api/games", upload.single("image"), (req, res) => {
    const { name, downloads, genre, description } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: "Image is required" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    const newGame = {
        gameId: games.length ? games[games.length - 1].gameId + 1 : 1,
        name,
        image: imageUrl,
        downloads: parseInt(downloads) || 0,
        genre,
        description,
    };

    games.push(newGame);
    res.status(201).json(newGame);
});

// API: Edit a game with optional image upload
app.put("/api/games/:id", upload.single("image"), (req, res) => {
    const gameId = parseInt(req.params.id);
    const { name, downloads, genre, description } = req.body;
    const game = games.find((g) => g.gameId === gameId);

    if (game) {
        // Update fields
        game.name = name || game.name;
        game.downloads = downloads ? parseInt(downloads) : game.downloads;
        game.genre = genre || game.genre;
        game.description = description || game.description;

        // Update image if new file is uploaded
        if (req.file) {
            const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
            game.image = imageUrl;
        }

        res.json(game);
    } else {
        res.status(404).json({ message: "Game not found" });
    }
});

// API: Delete a game
app.delete("/api/games/:id", (req, res) => {
    const gameId = parseInt(req.params.id);
    const gameIndex = games.findIndex((g) => g.gameId === gameId);

    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
        res.json({ message: "Game deleted successfully" });
    } else {
        res.status(404).json({ message: "Game not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});