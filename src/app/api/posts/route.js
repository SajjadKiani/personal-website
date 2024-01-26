import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET (request) {

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    let posts = []
    if (query) {
        posts = await prisma.post.findMany({
            where: {
                published: true,
                title: {
                    search: query
                }
            }
        })
    } else {
        posts = await prisma.post.findMany({
            where: {
                published: true
            }
        })
    }
    
    return NextResponse.json({
        posts,
    })
}