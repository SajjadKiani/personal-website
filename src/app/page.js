import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8 items-center justify-between">
      <div className="flex flex-col">
        <p className="text-[48px] font-semibold">
          Hello, I’m
        </p>
        <p className="text-[96px] font-medium text-primary text-bold p-0">
          Sajad Kiyani 
        </p>
        <p className="text-[48px] font-extralight">
          and i’m a Frontend Devloper
        </p>
        <p className="text-[24px] text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>

        <div className="space-x-6 mt-5">
          <Button asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/projects">Projects</Link>

          </Button>
          
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={'/banner.svg'}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
