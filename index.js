import express from 'express';
import bodyParser from 'body-parser';
import mobilroute from "./routes/mobil.js";
import hewanroute from "./routes/hewan.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/hewan", hewanroute);
app.use("/mobil", mobilroute);
app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagi")
})

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server berjalan di port : http://localhost:${PORT}`));

