import { Card, CardContent } from "@/components/ui/card";
import BlogSidebar from "@/components/ui/blog-sidebar";

export default function Page () {
    
    return (
        <div className="flex flex-col w-full">
            <div className="mt-20 grid grid-cols-3 gap-5">
                <div className="col-span-1">
                    <BlogSidebar />

                </div>
            </div>
        </div>
    )
}