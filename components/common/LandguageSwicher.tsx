import { Link } from "@/navigation";
import { useLocale } from "next-intl";
export default function LocaleSwitcher() {
  // const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "th" : "en";

  return (
    // <Select
    //   value={language}
    //   onValueChange={(value) => onLanguagesChanges(value)}
    // >
    //   <SelectTrigger className=" w-[100px] bg-transparent border-none focus:outline-none focus:ring-0 focus:ring-offset-0 ">
    //     <div className=" inline-flex items-center gap-4">
    //       <Avatar>
    //         <AvatarImage
    //           src={
    //             language === "en"
    //               ? "/icons/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png"
    //               : "/icons/Flag_of_Thailand.png"
    //           }
    //         />
    //         <AvatarFallback>EN</AvatarFallback>
    //       </Avatar>
    //       <span className=" uppercase text-base font-normal text-skin-neutral-600">
    //         {language}
    //       </span>
    //     </div>
    //   </SelectTrigger>
    //   <SelectContent align="end">
    //     <SelectItem value="en">
    //       <Link href="/" locale="en">
    //         En
    //       </Link>
    //     </SelectItem>
    //     <SelectItem value="ไทย">ไทย</SelectItem>
    //   </SelectContent>
    // </Select>

    <>
      <Link href={"/"} locale="en">
        En
      </Link>
      <Link href={"/"} locale="th">
        Th
      </Link>
    </>
  );
}
