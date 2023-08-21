import dbConnect from "@/utils/database/dbConnect";
import UserSchema from "@/utils/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await dbConnect();
  const { name, email, password } = await request.json();
  // checking if the email/username already exist or not.
  const existEmail = await UserSchema.findOne({ email: email });
  if (existEmail) {
    return NextResponse.json(
      { success: false, message: "Email is already used." },
      { status: 403 }
    );
  }
  // to hash the password
  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    // console.log("problem from here six");
    const newUser = new UserSchema({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    return NextResponse.json(
      {
        success: true,
        message: "User has been created.",
      },
      { status: 201 }
    );
  } catch (err) {
    // console.log(err.message, "from here problem");
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
};
