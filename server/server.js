const express = require ('express');
const cors = require ('cors');
const app = express ();

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.js'))
});

// spring scents

app.get("/spring", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/spring.html"))
})

app.get("/springS", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/spring.js"))
});

// summer scents

app.get("/summer", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/summer.html"))
})

app.get("/summerS", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/summer.js"))
});

// fall scents

app.get("/fall", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/fall.html"))
})

app.get("/fallS", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/fall.js"))
});

const {getSpringNotes, getSummerNotes, getFallNotes, addScentNotes} = require("./controller");

app.get("/api/scentNotes", getSpringNotes);
app.get("/api/scentNotes", getSummerNotes);
app.get("/api/scentNotes", getFallNotes);
app.post("/api/scentNotes", addScentNotes);


const PORT = 4000;

app.listen(PORT,()=>
console.log(`listening on ${PORT}`)
);