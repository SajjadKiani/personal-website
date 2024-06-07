import Link from "next/link";
import { GithubSvg, LinkedinSvg, TelegramSvg } from "../icon";


export default function Footer () {

    return (
        <footer className="flex container gap-7 py-8 justify-center md:justify-start">
            <Link href={'github.com/sajjadkiani'}> <GithubSvg width="32" height="32" /> </Link>
            <Link href={'github.com/sajjadkiani'}> <TelegramSvg width="32" height="32" /> </Link>
            <Link href={'github.com/sajjadkiani'}> <LinkedinSvg width="32" height="32" /> </Link>
        </footer>
    )
}