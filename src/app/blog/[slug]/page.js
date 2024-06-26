import path from "path";
import { readFileSync } from "fs"
import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import moment from "jalali-moment";

const fetchData = async (slug) => {
    const source = readFileSync(
        path.join('src', 'database', `${slug}.mdx`),
        'utf8'
    );

    const { content, frontmatter } = await compileMDX({ source, options: { parseFrontmatter: true } });

    return { content, frontmatter };
};

export default async function Page ({params}) {
    
    const {slug} = params;

    const { content, frontmatter } = await fetchData(slug)

    return (
        <div className="mt-20 md:px-36"  dir={frontmatter?.lang === 'en' ? 'ltr' : 'rtl'}>
            <div className="flex justify-between items-center">
                <p className="text-[36px] font-bold">
                    {frontmatter?.title}
                </p>

                <p className="text-secondary">
                    {frontmatter.date && moment(frontmatter?.date, 'YYYY-M-D HH:mm:ss')
                        .locale('fa')
                        .format('YYYY/M/D HH:mm:ss')
                    }
                </p>
            </div>
            
            <div className="text-justify">
                <Suspense fallback={<p>loading...</p>}>
                    {content}
                </Suspense>
            </div>
        </div>
    )
}

export async function generateMetadata({ params }) {

    const {slug} = params

    const { frontmatter } = await fetchData(slug)

    return {
      title: 'Blog | ' + frontmatter?.title,
      description: frontmatter?.description
    }
  }