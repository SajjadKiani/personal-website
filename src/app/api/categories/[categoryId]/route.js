import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET (request, {params}) {

    const { categoryId } = params;

    const category = await prisma.category.findUnique({
        where: {
            id: parseInt(categoryId),
        }
    })

    const posts = await prisma.post.findMany({
        where: {
            categories: {
                some: {
                    id: parseInt(categoryId)
                }
            }
        }
    })

    if (category)
        return NextResponse.json({
            category: {...category, posts},
            // posts
        })

    return NextResponse.json({
        status: 'error',
        message: 'not found!'
    })
}