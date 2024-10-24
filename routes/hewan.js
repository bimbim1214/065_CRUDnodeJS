import express, {Router} from "express";
const router = express.Router();

const hewan = [
    {
        nama: "yafi",
        jenis: "gorila afrika",
        jeniskelamin: "setengah pria",
        umur: 99
    },
    {
        nama: "alif",
        jenis: "beruk alaska",
        jeniskelamin: "setengah pria",
        umur: 104
    },
    {
        nama: "yusvan",
        jenis: "cacing alaska",
        jeniskelamin: "setengah pria",
        umur: 2000
    },
    {
        nama: "wisnu",
        jenis: "MONYET",
        jeniskelamin: "setengah pria",
        umur: 17
    },
];
router.get("/", (req, res) => {
    res.send(hewan);

});
export default router;