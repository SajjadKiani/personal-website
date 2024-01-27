import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET (request, {params}) {

    const { userId } = params;

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(userId),
        }
    })

    if (user)
        return NextResponse.json({
            user,
        })

    return NextResponse.json({
        status: 'error',
        message: 'not found!'
    })
}