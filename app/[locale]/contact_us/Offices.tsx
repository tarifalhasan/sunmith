import Image from "next/image";

const Offices = () => {
  const officesdata = [
    {
      name: "Beijing",
      address: [
        "Room 03-169, 3F,",
        "Wonderful World Commercial Plaza,",
        "38 Dongsanhuanzhong Road,",
        "Chaoyang District, Beijing (100000)",
      ],
    },
    {
      name: "Shenzhen",
      address: [
        "13F, Tianlong Building, No. 33,",
        "Xiandong Road, Xili, Nanshan District,",
        "Shenzhen, Guangdong",
      ],
    },
    {
      name: "Taipei",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "France",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "Dubai",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "India",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "USA & CANADA ",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "Poland",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
    {
      name: "Japan",
      address: [
        "7 F., No. 1-4, Sec. 5,",
        "Zhongxiao E. Rd., Xinyi Dist.,",
        "Taipei City 11071, Taiwan (110410)",
      ],
    },
  ];
  return (
    <div className=" bg-white  py-10 ">
      {/* main office */}
      <div className=" mt-10 space-y-7 xl:space-y-12 container">
        <h2 className="text-center text-2xl font-nato_sans font-bold lg:text-5xl">
          Offices
        </h2>
        <div>
          <Image
            src={"/images/Pic.07a4c73c.png"}
            width={1200}
            height={600}
            alt="sunmith head office"
            quality={80}
            className=" w-full h-auto"
          />
        </div>
        <div className=" pb-7 border-b border-black/20 flex flex-col lg:flex-row justify-between lg:items-center gap-4 ">
          <OfficeCard
            name="Shanghai | SUNMI Head Office"
            address={[
              "Building 7, No. 388, Songhu Rd,",
              "Yangpu District, Shanghai (200433)",
            ]}
          />
          <div>
            <p className=" text-sm  sm:text-base font-medium font-roboto">
              press@sunmi.com
            </p>
            <p className=" text-xs sm:text-sm text-slate-400 font-roboto font-normal">
              Press or media related inqueries.
            </p>
          </div>
        </div>
        <div className="   grid sm:grid-cols-2 xl:grid-cols-3  xl:gap-0 ">
          {officesdata.map((offices, index) => (
            <div className="py-10 border-b border-black/20" key={index}>
              <OfficeCard name={offices.name} address={offices.address} />
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
