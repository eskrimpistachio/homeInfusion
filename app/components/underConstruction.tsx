import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="h-screen w-screen">
      <div className="relative flex flex-col justify-center items-center h-[90vh] p-5 text-xl font-semibold">
        <h1 className="text-5xl animate-pulse">🚧🚨Under Construction🚨🚧</h1>
        <div className="flex flex-col justify-center items-center p-2 text-4xl">
            <h2>Progress : </h2>
            <h2>85%</h2>
        </div>
        <Image
          src={`https://res.cloudinary.com/dr0lbokc5/image/upload/v1684387560/Logo_BEM_nxphj5.svg`}
          alt="BEM FILKOM UB 2023"
          width={500}
          height={500}
          className="absolute -z-20 pointer-events-none opacity-30"
        />
      </div>
      <div className="flex justify-center items-center h-[10vh] bg-slate-900/40">
        By
        <span className="mx-2 hover:underline">
          <a href="https://bemfilkom.ub.ac.id/itpartnership/" target="_blank">
            IT PARTNERSHIP
          </a>
        </span>
        | 
        <span className="mx-2 hover:underline">
          <a href="https://bemfilkom.ub.ac.id/" target="_blank">
            BEM FILKOM UB 2023
          </a>
        </span>
      </div>
    </div>
  );
};

export default UnderConstruction;
