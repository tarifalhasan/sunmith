import { Button } from "../ui/button";

const ServeSection = () => {
  return (
    <section className=" pb-12">
      <div className=" bg-[#f3f5f7] py-8">
        <div className=" container">
          <div className=" space-y-7">
            <h2 className=" text-center text-3xl font-sans font-bold lg:text-[2.5rem]  ">
              บริการ
            </h2>
            <p className="text-center text-base  lg:font-semibold font-sans font-medium text-skin-neutral-700">
              <b>SUNMI TH </b>มีเจ้าหน้าที่บริการหลังการขายให้การดูแลตลอด{" "}
              <b>24</b> ชั่วโมง เพื่อให้ความช่วยเหลือเจ้าของร้าน ให้ข้อมูล
              แนะนำการใช้เครื่อง รวมถึงการจัดการทุกๆ อย่าง มีศูนย์บริการ
              มีเครื่องซ่อมระหว่างใช้ รวมถึงมี <b>Remote assistance </b>
              ในการเข้าถึงตัวเครื่องเสมือนทีมเจ้าหน้าที่เข้าถึงหน้าจอลูกค้า
              ช่วยเหลือแก้ไขปัญหาได้ทันที
            </p>
            <Button className=" h-[60px] px-10 mx-auto block rounded-full font-sans font-bold text-xl lg:text-2xl">
              เริ่มกันเลย
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServeSection;
