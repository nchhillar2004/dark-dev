import Link from "next/link";
import "animate.css";
import Image from "next/image";
import Bracket from "@/components/shared/Bracket";
import PricingSection from "@/components/app/PricingSection";
import ExploreSection from "@/components/app/ExploreSection";

export default function Home() {
  return (
    <div className="home container">
      <div className="fixed m-0 -left-20 top-1/2 -rotate-90 px-4 py-2 bg-black z-20 select-none">
        <Link href="https://www.youtube.com/@darkdevzone" target="_blank">
          Subscribe on YouTube
        </Link>
      </div>
      <section className="container flex flex-col lg:flex-row justify-around items-center h-fit min-h-[80vh] border-b border-[var(--seperator-color)] pb-8">
        <div className="heading">
          <h1 className="lg:text-[200px] max-md:text-center font-mono text-[160px] max-md:text-[120px] font-bold leading-none">
            <div className="animate__animated animate__slideInLeft lg:w-fit text-center w-full">
              Dark
            </div>
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
      </section>

      <section className="container h-fit border-b border-[var(--seperator-color)] pb-8">
        <div className="top my-8">
          <Bracket text="Why Dark Dev" />
        </div>
        <div className="bottom">
          <p className="lg:text-[64px] text-[40px] max-md:text-3xl leading-tight">
            Choose <span className="green-link">Dark Dev</span> for free
            courses, videos, and resources. Learn from experts without spending
            any money. Boost your skills with our easy-to-follow content.
          </p>
        </div>
      </section>

      <section className="container h-fit border-b border-[var(--seperator-color)] pb-8">
        <div className="top my-8">
          <Bracket text="Explore the best" />
        </div>
        <ExploreSection />
      </section>

      <section
        className="container h-fit border-b border-[var(--seperator-color)] pb-8"
        id="pricing"
      >
        <div className="top my-8">
          <Bracket text="Join us" />
        </div>

        <PricingSection />

        <p className="text-[var(--primary-grey)] text-center mt-8">
          All plans include the Core DarkDev courses, videos and resources.
          (FREE)
        </p>
      </section>

      <section className="container h-fit border-b border-[var(--seperator-color)] pb-8">
        <div className="top my-8">
          <Bracket text="Feedback" />
        </div>
        
      </section>
    </div>
  );
}
