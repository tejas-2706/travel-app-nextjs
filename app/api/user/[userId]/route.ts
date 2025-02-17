import { NextResponse } from "next/server";
import db from "@/lib/prisma";
import { getServerSession } from "next-auth"; 
import { autthOptions } from "@/app/lib/auth";

export async function PUT(req: Request) {
    try {
        const session = await getServerSession(autthOptions);
        if (!session || !session.user.email) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        const email = session.user.email; 
        const body = await req.json(); 

        const updated_data = await db.user.update({
            where: {
                email: email.toString() 
            },
            data: {
                number: body.mobile 
            }
        });

        return NextResponse.json({
            message: "User Updated Successfully !!"
        }, { status: 200 });

    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}













// import { NextResponse } from "next/server";
// import db from "@/lib/prisma";
// export async function PUT(req: Request, {params}:{params : {email : string}}){
//     try {
//         const email = params.email;
//         const body = await req.json();
//         const updated_data = await db.user.update({
//             where: {
//                 email: email.toString()
//             },
//             data: {
//                 // name: body.username,
//                 // email: body.email,
//                 number: body.mobile
//             }
//         })
//         if(!updated_data){
//             return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//         }
//         return NextResponse.json({
//             message : "User Updated Successfully !!"
//         }, {status: 200});
//     } catch (error) {
//         return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//     }
// }


