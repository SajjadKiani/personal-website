import Link from "next/link";
import { GithubSvg, LinkedinSvg, TelegramSvg } from "../icon";


export default function Footer () {

    return (
        <footer className="flex container gap-7 py-8">
            <Link href={'github.com/sajjadkiani'}> <GithubSvg /> </Link>
            <Link href={'github.com/sajjadkiani'}> <TelegramSvg /> </Link>
            <Link href={'github.com/sajjadkiani'}> <LinkedinSvg /> </Link>
        </footer>
    )
}