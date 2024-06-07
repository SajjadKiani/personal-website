
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function BlogSidebar ({items}) {

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
                                <ul className="space-y-2">
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