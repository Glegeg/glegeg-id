import redVelvet from "../assets/red-velvet.png";
import matchaPlain from "../assets/matcha-plain.png";
import chocoDelfi from "../assets/choco-delfi.png";

// Ini berisi produk produk yang tampil di halaman beranda, sama jadi database buat ngambil informasi produk
// Jangan ubah field "id" sama "path". Sisanya diganti gapapa kalo emang ada perubahan

// "name" itu nama produknya
// "price" itu harga barangnya. Jangan dikasih titik ya (kayak 15.000, yang bener 15000 aja)
// "img" itu foto produknya. Gambar bentuknya png dengan background diilangin. Untuk masukin kesini harus diimport dulu seperti yang dibagian paling atas itu
// "desc" itu deksripsi. Bentuknya array dan tiap koma nya itu berarti baris baru.

const products = [
  {
    id: "g00",
    path: "/red-velvet",
    name: "Original Red Velvet",
    price: 15000,
    img: redVelvet,
    desc: [
      "Lagi pusing nugas, skripsi, atau nungguin kepastian dari dia? Tenang, cobain nih Matcha Plain yang siap nemenin kamu berpusing pusing ria",
      "So? don't miss it!!!",
    ],
  },
  {
    id: "g01",
    path: "/matcha-plain",
    name: "Matcha Plain",
    price: 15000,
    img: matchaPlain,
    desc: [
      "Lagi pusing nugas, skripsi, atau nungguin kepastian dari dia? Tenang, cobain nih Matcha Plain yang siap nemenin kamu berpusing pusing ria",
      "So? don't miss it!!!",
      "Beli sekarang!",
    ],
  },
  {
    id: "g02",
    path: "/choco-delfi",
    name: "Choco Delfi",
    price: 15000,
    img: chocoDelfi,
    desc: [
      "Lagi pusing nugas, skripsi, atau nungguin kepastian dari dia? Tenang, cobain nih Matcha Plain yang siap nemenin kamu berpusing pusing ria",
      "So? don't miss it!!!",
    ],
  },
];

export default products;
