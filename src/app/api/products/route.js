import dbConnect from "@/utils/database/dbConnect";
import ProductSchema from "@/utils/models/product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await dbConnect();
    const products = await ProductSchema.find({});
    return NextResponse.json(
      {
        success: true,
        data: products,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const { name } = await req.json();
  try {
    await dbConnect();
    const newProduct = new ProductSchema({
      name: name,
      // category: category,
      // price: price,
      // img: img,
    });
    await newProduct.save();
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
};
