import express, {Router} from "express";
const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "GR",
        Warna: "Hitam",
        tahun: 2024
    },
    {
        merk: "Nissan GTR",
        model: "R35",
        warna: "Silver",
        tahun: 2020
    },
];
router.get("/", (req, res) => {
    res.send(mobil);

});
export default router;