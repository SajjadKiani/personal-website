import Image from "next/image";
import Link from "next/link";
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
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black">

      <div className="flex absolute h-full w-full">
        <Scene />
      </div>

      <div className="flex flex-col min-h-screen items-between justify-center md:px-48 px-8 py-10 md:py-0  w-full">
    
        <div className="col-span-2 grid grid-cols-1 gap-6  md:grid-cols-4">


          <div className="col-span-1 md:col-span-2  md:row-span-3">
            <Card className="md:h-full">
              <CardContent>
                  <div className=" py-12  md:text-start text-center">
                    <h1 className="text-white scroll-m-20 text-8xl font-[1000] lg:text-9xl">
                      Sajad
                    </h1>
                    <h1 className="text-white scroll-m-20 text-8xl font-[1000] lg:text-9xl">
                      Kiyani
                    </h1>
                    <h3 className="text-white scroll-m-20 text-6xl font-[500] lg:text-7xl ">
                      Frontend
                    </h3>
                    <h3 className="text-white scroll-m-20 text-6xl font-[500] lg:text-7xl ">
                      Developer
                    </h3>
                  </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 md:row-span-2 ">
            <Link href={'/projects'}>
              <Card className="md:h-full">
                <CardHeader>
                  <CardTitle>Projects </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p></p>
                </CardContent>
                <CardFooter>
                  <p></p>
                </CardFooter>
              </Card>
            </Link>
          </div>

          <div className="col-span-1">
            <Link href={'/blog'}>
              <Card className="md:h-full">
                <CardHeader>
                  <CardTitle>Blog</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p></p>
                </CardContent>
                <CardFooter>
                  <p></p>
                </CardFooter>
              </Card>
            </Link>
          </div>

          <div className="col-span-1  ">
            <Link href={'/resume'}>
              <Card className="md:h-full">
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p></p>
                </CardContent>
                <CardFooter>
                  <p></p>
                </CardFooter>
              </Card>
            </Link>
          </div>

          <div className="md:col-span-2 col-span-1 ">
            <Card>
              <CardHeader>
                <CardTitle>Socials</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-5">
                  <div>
                    <TelegramIcon />
                  </div>
                  <div>
                    <InstagramIcon />
                  </div>
                  <div>
                    <GithubIcon />
                  </div>
                  <div>
                    <LinkedInIcon />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p></p>
              </CardFooter>
            </Card>
          </div>

        </div>

      </div>

    </main>
  );
}
