import Image from "next/image";

const OurServices = () => {
  const data = [
    {
      id: 1,
      icon: "/images/products/total_bill.svg",
      title: "Total Bill",
      des: "",
    },
    {
      id: 2,
      icon: "/images/products/customars.svg",
      title: "Total Customer",
      des: "",
    },
    {
      id: 3,
      icon: "/images/products/customars2.svg",
      title: "Total Customer",
      des: "",
    },
  ];
  return (
    <section className="  py-12 container">
      <div>
        <h2 className=" relative after:absolute after:w-[56px] after:h-[2px] after:bg-[#9A9A9A] after:left-1/2 text-center text-3xl font-sans font-bold lg:text-[2.5rem] after:-translate-x-1/2 after:top-[162%]">
          บริการของเรา
        </h2>
        <p className=" pt-[60px] sm:pt-[80px] text-center text-base lg:text-lg lg:font-semibold font-sans font-medium text-skin-neutral-700">
          <b className=" font-normal lg:font-bold">SUNMI OFFICIAL THAILAND</b>{" "}
          <br className=" lg:hidden" />
          เป็นผู้นำเข้าและจัดจำหน่ายสินค้าอย่างเป็นทางการของแบรนด์ <b>
            SUNMI
          </b>{" "}
          <br className=" hidden lg:block" />
          ทางเรามีทีมงานผู้เชี่ยวชาญที่ได้รับการฝึกอบรมมาอย่างมืออาชีพ
          ให้คำแนะนำการใช้งาน
          และบริการให้คำปรึกษาหลังการขายในการแก้ไขปัญหาการใช้งานสินค้า
          เพื่อช่วยให้ธุรกิจของท่านดำเนินไปได้อย่างราบรื่น
          และมอบการบริการที่ดีที่สุดให้แก่ลูกค้าของเราจากทั่วทั้งประเทศ
        </p>
      </div>
      <div className=" grid pt-[65px] lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={item.id}
            style={{
              boxShadow: "10px 40px 50px 68px #E5E9F666",
            }}
            className="   rounded-[20px] p-4 lg:p-6"
          >
            <div className="flex flex-col items-center gap-8">
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={165}
                  height={154}
                />
              </div>
              <div className="">
                <h2 className=" text-2xl font-sans font-bold text-skin-neutral-600">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className=" pt-7">
              <p className=" text-base text-center lg:text-left text-[#7D7987]">
                You can get 24/7 urgent care for yourself{" "}
                <br className=" hidden lg:block" /> or your children and your{" "}
                <br className=" hidden lg:block" /> lovely family
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
