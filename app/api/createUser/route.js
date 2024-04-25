import { connectToDb } from "@/connectToDB";
import User from "@/modal/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    connectToDb()

    if (!user || user === null || !user.id) {
        throw new Error("Something went wrong")
    }


    
    try {
        const doesUserExist = await User.findOne({ user_id: user.id })
        
        if (!doesUserExist) {
            const createNewUser = await User.create({
                user_id: user?.id,
                family_name: user?.family_name,
                given_name: user?.given_name,
                email: user?.email,
                picture: user?.picture
            })

            await createNewUser.save()

            console.log('user created');

        }

        return NextResponse.redirect("http://localhost:3000")
    } catch (error) {
        console.log("not created");
        console.log(error);
        throw new Error("Something went wrong")
    }

}