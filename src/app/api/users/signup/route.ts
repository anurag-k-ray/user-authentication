import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"



//Connect with mongoDB
connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, email, password}= reqBody;

        console.log(reqBody);

        //Check if user already exist
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error:"User already exist"},{status:409})
        }
        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);

        //Create new user
        const newUser = new User({
            username,
            email,
            password:hashPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        })
        
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}