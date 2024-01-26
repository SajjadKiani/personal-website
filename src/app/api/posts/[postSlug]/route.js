import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET (request, {params}) {

    const { postSlug } = params;

    const post = await prisma.post.findUnique({
        where: {
            slug: postSlug,
            published: true
        }
    })

    if (post)
        return NextResponse.json({
            post,
        })

    return NextResponse.json({
        status: 'error',
        message: 'not found!'
    })
}