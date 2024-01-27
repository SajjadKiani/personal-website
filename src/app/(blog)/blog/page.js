import { getPosts, getCategories } from "@/service"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader } from "@/components/ui/card";
import moment from "moment";
import Link from "next/link";

export default async function Page () {

    const postRes = await getPosts()
    const posts = await postRes.data.posts

    const categoriesRes = await getCategories()
    const categories = await categoriesRes.data.categories  

    return (
        <div className="container mt-24"> 
            <div className="grid gap-10 grid-cols-3 content-center">

                <div className="col-span-2">
                    <div className="flex flex-col gap-5">
                        {posts && posts.map((post, index) => 
                            <Card className={'text-end'} key={index}>
                                <CardHeader>
                                    <Link href={`blog/${post.slug}/`}>
                                        <CardTitle>{post.title}</CardTitle>
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <p>{post.content}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-end text-gray-800 ">{moment(post.createdAt).format("YYYY-MM-DD HH:MM")}</p>
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                </div>

                <div className="col-span-1">
                    <h3 className="scroll-m-20 text-2xl font-bold mb-10 ">دسته بندی</h3>
                    <div className="flex gap-2">
                        {categories && categories.map((category, index) => 
                            <Badge key={index}>
                                {category.name}
                            </Badge>    
                        )}
                    </div>
                </div>  
                
            </div>

        </div>
    )
}