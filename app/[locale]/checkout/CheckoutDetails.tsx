import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const CheckoutDetails = () => {
  return (
    <div className=" basis-full border-2 p-4 border-slate-200 xl:basis-[45%]">
      <div>
        <h2 className=" pb-3 text-sm xl:text-base font-roboto font-bold text-slate-950">
          Your order
        </h2>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product </TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  ลิ้นชักเก็บเงิน ขนาดใหญ่ Maken Mk-420 × 1
                </TableCell>
                <TableCell className="text-right">฿250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Subtotal</TableCell>
                <TableCell className="text-right">฿1,680</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shipping</TableCell>
                <TableCell className="text-right">Flat rate: ฿200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Total</TableCell>
                <TableCell className="text-right">฿1,880</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className=" py-3">
            <p className=" pb-2 text-sm font-roboto">
              Credit / Debit Card and Cash Payment (2C2P)
            </p>
            <h3 className=" relative text-sm hjhgjhgj font-roboto bg-gray-100 p-4">
              Pay Securely by Credit / Debit card or Internet banking through
              2C2P.
            </h3>
          </div>
          <p className=" py-2 text-sm font-normal font-roboto">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link className=" text-primary" href={"/"}>
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className=" flex w-full" type="submit">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
