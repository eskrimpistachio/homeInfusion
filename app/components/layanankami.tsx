import CardLayanan from "./CardLayanan";

const Layanankami = () => {
  return (
    <div className="bg-white bg-layanan-kami bg-cover bg-center bg-no-repeat py-20">
      <div className="cust-container flex flex-col items-center justify-center">
        <h1 className="text-cust-pinkTua md:font-semibold font-bold text-4xl md:text-6xl mb-4 md:mb-10 whitespace-nowrap">
          Layanan Kami
        </h1>
        <div className="flex justify-center p-2 text-white">
          <div className="w-full flex flex-wrap justify-center gap-y-5 md:gap-0">
            <CardLayanan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanankami;
