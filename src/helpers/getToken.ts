import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.name ?? "";
    const decodeToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodeToken._id;
  } catch (error: any) {
    return new Error(error.message);
  }
};
