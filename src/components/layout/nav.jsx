import Link from "next/link";
import Logo from "./logo";
import { MenuIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function Nav () {

    const links = [
        {title: 'Resume', path: '/resume'},
        {title: 'Projects', path: '/projects'},
        {title: 'Blog', path: '/blog'},
        {title: 'Home', path: '/'},
    ]
    
    return (
        <nav className="flex container justify-between py-4 items-center">
            <Logo />

            <div className="md:block hidden space-x-10">
                {links.map((item, index) => 
                    <Link className="text-[28px]" href={item.path} key={index}>
                        {item.title}
                    </Link>
                )}
            </div>

            <div className="md:hidden block">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenuIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {links.map((item,index) =>
                            <DropdownMenuItem key={index}>
                                <Link href={item.path}>
                                    {item.title}
                                </Link>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}