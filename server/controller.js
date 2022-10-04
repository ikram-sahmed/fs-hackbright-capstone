const scentNotes = require("./db.json");

module.exports={
    getspringNotes: (req, res) => {
        res.status(200).send(scentNotes);
    },

    getSummerNotes: (req, res) => {
        res.status(200).send(scentNotes);
    },

    getFallNotes: (req, res) => {
        res.status(200).send(scentNotes);
    },

    addScentNotes: (req, res) => {
        const winterScentNotes = req.body
        scentNotes.push(winterScentNotes);
        res.status(200).send(scentNotes);
    },


    getNewScent: (req, res) => {
        const scents = ['Maison Francis Kurkdjian Aqua Universalis',
        'Tom Ford Soleil Blanc',
        'Maison Margiela REPLICA Beach Walk',
        'Dior JAdore In Joy',
        'Lancôme La Vie Est Belle Soleil Cristal',
        'Marc Jacobs Daisy Love',
        'Byredo Bal d’Afrique',
        'Diptyque Philosykos',
        'Chanel Chance Eau Fraiche',
        'Giorgio Armani Acqua di Gioia',]

        let randomNumber = Math.floor(Math.random() * (scents.length));
        randomScent.innerHTML = scents[randomNumber]
      
        res.status(200).send(randomScent);
    }
}