
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function BlogSidebar () {

    const items = [
        {category: 'test', title: 'testdddd', slug: 'test'},
        {category: 'test1', title: 'test1', slug: 'test1'},
        {category: 'test2', title: 'test2', slug: 'test2'},
        {category: 'test2', title: 'test3', slug: 'test3'},
    ]

    const categories = items.map((d) => d.category)

    const sidebarItems = {}
    categories.map((category) => {
        sidebarItems[category] = items.filter(item => item.category === category)
    })

    
    return (
        <div className="bg-muted px-5 rounded-md">
            <Accordion type="single" collapsible>
                {
                    Object.keys(sidebarItems).map((category, index) => 
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger> {category} </AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    {sidebarItems[category].map((item, index) => 
                                        <li key={index}> 
                                            <Link href={'blog/' + item.slug}>
                                                {item.title}
                                            </Link>
                                         </li>
                                    )}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    )
                }
            </Accordion>
        </div>
    )
}