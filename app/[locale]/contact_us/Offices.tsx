import branchLocation from "@/data/branchLocation.json";
const Offices = () => {
  return (
    <div className=" bg-white  py-10 ">
      {/* main office */}
      <div className=" mt-10 space-y-7 xl:space-y-12 container">
        <h2 className="text-center text-2xl font-nato_sans font-bold lg:text-5xl">
          Offices
        </h2>
        {/* <div>
          <Image
            src={"/images/Pic.07a4c73c.png"}
            width={1200}
            height={600}
            alt="sunmith head office"
            quality={80}
            className=" w-full h-auto"
          />
        </div> */}

        <div className=" grid sm:grid-cols-2 gap-12 xl:grid-cols-3">
          {branchLocation.BRANCH.map((item, index) => (
            <div className=" bg-gray-50 p-4" key={index}>
              <div className=" h-[150px]">
                <h2 className="   lowercase text-xl text-[#303541] font-medium font-roboto">
                  {item.name}
                </h2>
                <div>
                  <p className=" text-base py-2 font-semibold text-primary">
                    {item.phone}
                  </p>
                </div>
                <p className=" text-base text-black/60 font-roboto font-medium">
                  {item.address}
                </p>
              </div>
              <div>
                <img
                  className=" scale-100 transition-all cursor-pointer duration-500 hover:scale-105"
                  src={item.office_image}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;

const OfficeCard = ({ name, address }: { name: string; address: string[] }) => {
  return (
    <div className=" space-y-2">
      <h2 className=" text-base lg:text-xl text-black font-roboto font-medium">
        {name}
      </h2>
      <ul>
        {address.map((a, index) => (
          <li
            className=" font-bold text-black text-sm sm:text-base  font-roboto"
            style={{
              color: "rgb(51, 60, 79)",
            }}
            key={index}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};
