import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8 items-center justify-between mt-20 md:mt-0">
      <div className="flex flex-col col-span-2 md:col-span-1">
        <p className="text-[48px] font-semibold">
          Hello, I’m
        </p>
        <p className="text-[96px] font-medium text-primary text-bold p-0">
          Sajad Kiyani 
        </p>
        <p className="text-[48px] font-extralight">
          and i’m a Frontend Devloper
        </p>
        <p className="text-[24px] text-justify"> who loves blockchain technology and research. I enjoy building easy-to-use web3 solutions that combine advanced technology with good design.</p>

        <div className="mt-5 flex gap-6 justify-center md:justify-start">
          <Button asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/projects">Projects</Link>

          </Button>
          
        </div>
      </div>

      <div className="md:flex justify-end hidden">
        <Image
          src={'/banner.svg'}
          width={600}
          height={600}
          alt="banner"
        />
      </div>
    </div>
  );
}
