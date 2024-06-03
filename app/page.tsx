import Link from "next/link";
import "animate.css";
import Image from "next/image";
import Bracket from "@/components/shared/Bracket";

export default function Home() {
  return (
    <div className="home">
      <div className="fixed m-0 -left-20 top-1/2 -rotate-90 px-4 py-2 bg-black z-20">
        <Link href="https://www.youtube.com/@darkdevzone" target="_blank">
          Subscribe on YouTube
        </Link>
      </div>
      <div className="container">
        <div className="container flex flex-col lg:flex-row justify-around items-center h-fit min-h-[100vh] border-b border-[var(--seperator-color)]">
          <div className="heading">
            <h1 className="lg:text-[200px] max-md:text-center font-mono text-[160px] max-md:text-[120px] font-bold leading-none">
              <div className="animate__animated animate__slideInLeft lg:w-fit text-center w-full">Dark</div>
              <div className="animate__animated animate__slideInRight lg:w-fit text-center w-full">
                Dev
              </div>
            </h1>
            <Bracket text="Get started today: Unveiling the Hidden Knowledge." />
          </div>
          <div className="banner">
            <Image
              src="/hacker.png"
              alt="Dark Dev Black hat hacker banner"
              height={500}
              width={500}
              className="select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
