import Product from "@/models/Products";
import { NextResponse } from "next/server";
export async function GET(request: Request, context: any) {
  const { params } = context;

  const foundProducts = await Product.findOne({ _id: params.id });
  return NextResponse.json({ foundProducts }, { status: 200 });
}

export async function PUT(req: Request, context: any) {
  try {
    const { params } = context;
    console.log(params.id);
    const data = await req.json();

    const updateProductData = await Product.findByIdAndUpdate(params.id, {
      ...data,
    });

    return NextResponse.json(
      { message: "Product updated", updateProductData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: any) {
  try {
    const { params } = context;
    await Product.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
