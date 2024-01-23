import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scene } from "@/components";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black">

      <div className="flex absolute h-full w-full z-0">
        <Scene />
      </div>

      <div className="flex flex-col min-h-screen items-between justify-center md:px-48 px-8 z-10 absolute w-full">
    
        <div className="col-span-2 grid grid-cols-1 gap-4  md:grid-cols-4">
          <div className="col-span-1 md:col-span-2  md:row-span-3">
            {/* <Card className="md:h-full">
              <CardHeader>
                <CardTitle>Sajad Kiani</CardTitle>
                <CardDescription>Frontend Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card> */}
            <div className="md:h-full py-32  md:text-start text-center ">
              <h1 className="text-white scroll-m-20 text-8xl font-[1000] tracking-tight lg:text-9xl">
                Sajad
              </h1>
              <h1 className="text-white scroll-m-20 text-8xl font-[1000] tracking-tight lg:text-9xl">
                Kiyani
              </h1>
              <h3 className="text-white scroll-m-20 text-6xl font-[500] tracking-tight lg:text-7xl">
                Frontend Developer
              </h3>
            </div>
          </div>

          <div className="col-span-1 md:row-span-2 ">
            <Card className="md:h-full">
              <CardHeader>
                <CardTitle>Card Title 1 </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Card Title 2</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <div className="col-span-1  ">
            <Card>
              <CardHeader>
                <CardTitle>Card Title 3</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-2 col-span-1 ">
            <Card>
              <CardHeader>
                <CardTitle>Card Title 4</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

        </div>

      </div>

    </main>
  );
}
