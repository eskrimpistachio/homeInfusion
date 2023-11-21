"use client";

import Image from "next/image";

const dataLayanan = [
  {
    id: 1,
    nama: "Immune Booster",
    deskripsi:
      "Immune Booster kekebalan bertujuan untuk mendukung produksi energi dalam menjaga kesehatan tubuh dan meningkatkan ketahanan imun.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402372/Layanan1.png`,
    harga: "Rp. 1.150.000",
    komposisi: ["Paracetamol IV"],
  },
  {
    id: 2,
    nama: "Hangover Infusion",
    deskripsi:
      "Hangover Infusion adalah prosedur singkat selama 30-60 menit yang membantu Anda cepat pulih dari gejala mabuk melalui pemberian cairan dan kombinasi vitamin serta elektrolit.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402376/Layanan2.png`,
    harga: "Rp. 1.580.000",
    komposisi: [
      "Pain Killer IV",
      "Anti-Vomiting IV",
      "Gaster Protector IV",
      "Vit B1, B6, B12 IV",
    ],
  },
  {
    id: 3,
    nama: "Fever Infusion",
    deskripsi:
      "Fever Infusion adalah cara cepat untuk menurunkan demam tinggi pada orang dewasa melalui suntikan intravena dan dapat bermanfaat untuk mengembalikan cairan tubuh.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402368/Layanan3.png`,
    harga: "Rp. 1.090.000",
    komposisi: ["Paracetamol IV"],
  },
  {
    id: 4,
    nama: "Gerd / Gastritis Infusion",
    deskripsi:
      "Gerd / Gastritis Infusion bermanfaat untuk mengatasi peradangan pada lambung atau gaster yang disebabkan oleh iritasi akibat asam lambung.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402371/Layanan4.png`,
    harga: "Rp. 1.580.000",
    komposisi: [
      "Pain Killer IV",
      "Anti-Vomiting",
      "Gaster Protector IV",
      "Vit B1, B6, B12 IV",
    ],
  },
  {
    id: 5,
    nama: "Bali Belly Infusion",
    deskripsi:
      "Bali Belly Infusion dapat membantu Anda mengatasi gangguan saluran pencernaan yang disebabkan oleh makanan atau minuman yang terkontaminasi.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402377/Layanan5.png`,
    harga: "Rp. 1.580.000",
    komposisi: [
      "Pain Killer IV",
      "Anti-Vomiting IV",
      "Gaster Protector IV",
      "Vit B1, B6, B12 Drip",
    ],
  },
  {
    id: 6,
    nama: "Vit B Complex Infusion",
    deskripsi:
      "Vit B Complex Infusion berfungsi untuk meningkatkan energi, memelihara sistem saraf, dan mendukung metabolisme sel dalam tubuh.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402377/Layanan6.png`,
    harga: "Rp. 600.000",
    komposisi: ["Vit B Complex", "Vit C (+Rp150.000)"],
  },
  {
    id: 7,
    nama: "Flu Booster",
    deskripsi: "Dengan kombinasi obat lambung, mengurangi inflamation, dan suplemen vitamin B1, B6, serta B12 melalui drip, layanan ini tidak hanya membantu melawan flu, tetapi juga meningkatkan kesehatan Anda secara keseluruhan.",
    gambar: `https://res.cloudinary.com/dr0lbokc5/image/upload/v1695402380/Layanan7.png`,
    harga: "Rp. 1.580.000",
    komposisi: [
      "Obat lambung",
      "Vit B1, B6, B12 Drip",
    ]
  }
];

const CardLayanan = () => {
  return dataLayanan.map((item:any) => {

    return (
      <div key={item.id} className="w-[290px] h-fit md:w-[350px] sm:h-[350px] p-4">
        <div
          className={`rounded-xl w-[260px] h-fit md:w-[330px] sm:h-[350px] md:h-[330px] bg-cover bg-center overflow-hidden group cursor-pointer`}
          style={{ backgroundImage: `url(${item.gambar})` }}
        >
          <div
            className={`bg-black w-[260px] h-fit md:w-[330px] sm:h-[350px] md:h-[330px] p-4 bg-opacity-60 rounded-xl transform translate-y-0 md:translate-y-2/3 md:group-hover:translate-y-0 transition-all duration-700`}
          >
            <h5 className="text-lg mb-2 relative">
              {item.nama}
              <Image
                src="/chevron-right.svg"
                width={20}
                height={20}
                className="hidden md:flex group-hover:rotate-90 -rotate-90 absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500"
                alt="Chevron Icon"
              />
            </h5>
            <div className="px-2 py-2 mb-5 font-semibold bg-cust-pinkMuda w-fit rounded-lg">
              {item.harga}
            </div>
            <p className="text-sm text-justify">{item.deskripsi}</p>
            <ul className="list-disc px-4 py-2 text-sm">
              {item.komposisi.map((komposisi:any) => {
                return <li key={komposisi}>{komposisi}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
};

export default CardLayanan;
