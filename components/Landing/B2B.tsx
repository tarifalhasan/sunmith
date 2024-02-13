import Image from "next/image";

const B2B = () => {
  return (
    <section className="container relative overflow-hidden ">
      <div
        style={{
          backgroundPosition: "100% 100%",
        }}
        className="  w-full flex bg-cover bg-no-repeat rounded-[10px]  min-h-[175px] sm:min-h-[400px]  bg-b2b"
      >
        <div className=" px-6 py-7 lg:px-8 lg:py-9">
          <div className=" gap-4 sm:gap-6 inline-flex items-center">
            <Image
              src={"/icons/clients.svg"}
              alt=""
              className=" max-w-7 sm:max-w-16 lg:max-w-16"
              width={65}
              height={65}
            />
            <div>
              <h2 className=" text-white font-sans font-bold text-sm lg:text-3xl">
                B2B Clients / B2C Clients
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B;
