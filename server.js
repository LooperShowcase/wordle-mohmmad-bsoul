const express = require("express")

const server = express();

const wordle = "label";

server.get("/guess/:word", (req, res) => {
    const userGuess = req.params.word;
    let result = [];

    for (let i = 0; i < userGuess.length; i++) {
        let ch = userGuess[i];
        if (wordle[i] == ch) {
            result.push("#6FC993");
        } else if (wordle.includes(ch)) {
            result.push("#E6D445");
        } else {
            result.push("#E60E00");
        }
    }
    res.json(result);
});

server.use(express.static("public"))

server.listen(3000, () => {
    console.log("server is worky");
})