import connect from "@/lib/mongo";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.find();

    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    // const productData = body.formData;
    await Product.create(data);
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error in createing products" + error, {
      status: 500,
    });
  }
};
