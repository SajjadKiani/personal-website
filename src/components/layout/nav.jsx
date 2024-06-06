import Link from "next/link";
import Logo from "./logo";
import { MenuIcon } from "lucide-react";


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
                <MenuIcon />
            </div>
        </nav>
    )
}