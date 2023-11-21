import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#66474D] p-2">
      <div className="flex flex-col mt-16 mx-2 cust-container text-white">
        <div className="flex flex-col lg:flex lg:flex-row md:items-center lg:items-start justify-center pt-24 ml-0 gap-10 lg:gap-0 ">
          <div className="flex justify-center font-monserrat items-center font-semibold text-3xl text-center md:text-start ml-5 lg:ml-0 md:text-6xl">
            Tentang Kami
          </div>
          <div className="flex flex-col pl-0 w-full lg:pl-12 lg:w-4/6 gap-5 ">
            <div className="w-full text-justify lg:w-full md:text-xl lg:text-lg font-semibold font-monserrat">
              Klinik home.infusion adalah layanan medis di rumah pasien. Tim
              medis berpengalaman seperti perawat dan dokter yang datang untuk
              pemantauan, pemberian obat dan infus, serta edukasi pasien.
              Keuntungan dari layanan klinik home. infusion termasuk kenyamanan,
              privasi, dan pengurangan risiko infeksi yang mungkin timbul di
              lingkungan rumah sakit.
            </div>
            <div className="w-full text-justify lg:w-full text-base md:text-lg font-extralight font-monserrat">
              Klinik home.infusion biasanya digunakan untuk pasien dengan
              kondisi lelah, orang lanjut usia, individu yang pulih dari
              operasi, atau mereka yang membutuhkan perawatan infus di rumah.
              Layanan ini dapat membantu memastikan bahwa pasien menerima
              perawatan yang sesuai sambil tetap berada di lingkungan yang
              nyaman bagi mereka.
            </div>
          </div>
        </div>
        <div>
          <Image
            className="mx-auto pointer-events-none md:mt-4 h-[270px] lg:h-[270px] w-[750px] md:w-[550px] lg:w-[650px] flex"
            src={
              "https://res.cloudinary.com/dnyrrcacd/image/upload/v1695268823/BEM/IT_PARTNERSHIP/flower-grup_tssxlp.svg"
            }
            alt="MissingImage"
            width={500}
            height={500}
          />
        </div>
        <div className="md:hidden flex flex-wrap justify-center gap-6">
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md">
            <div className="relative h-[260px] w-[260px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695269555/BEM/IT_PARTNERSHIP/foto-custhelp_dxrp9f.svg"
                  alt="Background Image"
                  className="absolute brightness-50 top-0 left-0 w-full h-full scale-125"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-4 text-center text-sm font-medium">
                    Layanan yang mudah, nyaman, dan terjamin keamanannya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md ">
            <div className="relative h-[260px] w-[260px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="/../../public/assets/house_bkvtnl.svg"
                  alt="Background Image"
                  className="absolute brightness-50 top-0 left-0 w-full h-full scale-125"
                  width={500}
                  height={500} 
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-4 text-center text-sm font-medium">
                    Didukung oleh tim medis yang berpengalaman, terampil, dan
                    tersertifikasi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md ">
            <div className="relative h-[260px] w-[260px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276957/BEM/IT_PARTNERSHIP/house_bkvtnl.svg"
                  alt="Background Image"
                  className="absolute brightness-50 top-0 left-0 w-full h-full scale-125"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-4 text-center text-sm font-medium">
                    Pelayanan Infus di rumah
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md ">
            <div className="relative h-[260px] w-[260px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276956/BEM/IT_PARTNERSHIP/pin_nw4pw0.svg"
                  alt="Background Image"
                  className="absolute brightness-50 top-0 left-0 w-full h-full scale-125"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-4 text-center text-sm font-medium">
                    Area pelayanan yang luas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:hidden flex-row justify-center gap-6 flex-wrap ">
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[270px] w-[270px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695269555/BEM/IT_PARTNERSHIP/foto-custhelp_dxrp9f.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Layanan yang mudah, nyaman, dan terjamin keamanannya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[270px] w-[270px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276956/BEM/IT_PARTNERSHIP/doct_hdewfk.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Didukung oleh tim medis yang berpengalaman, terampil, dan
                    tersertifikasi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[270px] w-[270px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276957/BEM/IT_PARTNERSHIP/house_bkvtnl.svg  "
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Pelayanan Infus di rumah
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[270px] w-[270px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276956/BEM/IT_PARTNERSHIP/pin_nw4pw0.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Area pelayanan yang luas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row justify-center gap-y-16 gap-x-5 flex-wrap px-20">
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[350px] w-[350px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695269555/BEM/IT_PARTNERSHIP/foto-custhelp_dxrp9f.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Layanan yang mudah, nyaman, dan terjamin keamanannya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[350px] w-[350px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276956/BEM/IT_PARTNERSHIP/doct_hdewfk.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Didukung oleh tim medis yang berpengalaman, terampil, dan
                    tersertifikasi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[350px] w-[350px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276957/BEM/IT_PARTNERSHIP/house_bkvtnl.svg  "
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Pelayanan Infus di rumah
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg hover:drop-shadow-md group">
            <div className="relative h-[350px] w-[350px] bg-contain bg-no-repeat">
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1695276956/BEM/IT_PARTNERSHIP/pin_nw4pw0.svg"
                  alt="Background Image"
                  className="absolute group-hover:scale-125 ease-in-out duration-500 group-hover:brightness-50 top-0 left-0 w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute flex justify-center items-center">
                  <div className="px-16 text-center text-2xl font-medium">
                    Area pelayanan yang luas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="mx-auto pointer-events-none md:mt-4 h-[270px] lg:h-[350px] w-[750px] md:w-[550px] lg:w-[650px] flex"
            src={
              "https://res.cloudinary.com/dnyrrcacd/image/upload/v1695268824/BEM/IT_PARTNERSHIP/flower_djmt3q.svg"
            }
            alt="MissingImage"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
