import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET (request) {

    const categories = await prisma.category.findMany()

    return NextResponse.json({
        categories,
    })
}