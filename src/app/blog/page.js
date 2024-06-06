import BlogSidebar from "@/components/ui/blog-sidebar";
import Link from "next/link";
import { serialize } from 'next-mdx-remote/serialize'
import fs, { readFileSync } from "fs"
import path from "path";

export default async function Page () {

    const files = fs.readdirSync('src/database');

    const posts = []

    await Promise.all( files.map(async (file) => {
        const source = readFileSync(
            path.join('src', 'database', (file)),
            'utf8'
        )

        const mdxSource = await serialize(source, { parseFrontmatter: true })
        posts.push(mdxSource.frontmatter)
    }))

    return (
        <div className="flex flex-col w-full">
            <div className="mt-20 grid grid-cols-4 justify-between gap-20">
                <div className="md:col-span-1 col-span-4">
                    <BlogSidebar items={posts} />
                </div>
                <div className="md:col-span-3 col-span-4 flex flex-col" dir="rtl">
                    {posts.map((post, index) =>                     
                        <div key={index}>
                            <div className="flex justify-between items-center">
                                <p className="text-[36px] font-bold">
                                    <Link href={post.slug}>
                                        {post.title}
                                    </Link>
                                </p>

                                <p className="text-secondary">
                                    ۱۴۰۳/۲/۱
                                </p>
                            </div>
                            <p className="text-justify">
                                {post.description}
                            </p>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}