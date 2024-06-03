import Link from "next/link";
import 'animate.css';

export default function Home() {
  return (
    <div className="home">
      <div className="fixed m-0 -left-20 top-1/2 -rotate-90 px-4 py-2 bg-black z-20">
        <Link href="https://www.youtube.com/@darkdevzone" target="_blank">
          Subscribe on YouTube
        </Link>
      </div>
      <div className="container flex items-center h-[90vh] border-b border-[#3d3e43]">
        <h1 className="lg:text-[200px] max-md:text-center font-mono text-[160px] max-md:text-[120px] font-bold leading-none">
          <div className="animate__animated">Dark</div>
          <div className="animate__animated">Dev</div>
        </h1>
      </div>
    </div>
  );
}
