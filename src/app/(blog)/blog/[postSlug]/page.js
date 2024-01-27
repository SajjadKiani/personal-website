import { getPost, getUser } from "@/service";
import moment from "moment";


export default async function Page({params}) {

    const { postSlug } = params;

    const postResponse = await getPost(postSlug);
    const post = await postResponse.data.post;

    const userRes = await getUser(post.authorId)
    const author = await userRes.data.user;

    return (
        <div className="container md:px-48 mt-24 text-end">
            <h1 className="scroll-m-20 font-bold text-5xl mb-3"> {post.title} </h1>
            <p> {author.name} </p>
            <p> {moment( post.createdAt).format("YYYY-MM-DD HH:MM")} </p>
            <p className="mt-24">
                {post.content}
            </p>
        </div>
    )
    
}