import fs, {readFileSync} from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export default async function sitemap() {

    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://personal-website-indol-sigma.vercel.app' : 'http://localhost:3000/'

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

    const postUrls = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date
    }))

    return [
        {url: baseUrl, lastModified: new Date()},
        {url: baseUrl + '/blog', lastModified: new Date()},

        ...postUrls
    ]
}