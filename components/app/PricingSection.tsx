import React from "react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <div className="pricing">

      <h1 className="lg:text-[78px] text-[60px] max-md:text-[48px] font-bold text-center my-8">
        Join Club DarkDev
      </h1>

      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-x-2 justify-around">

        <div className="card hover:border-[var(--color-shockingly-green)] text-[var(--color-shockingly-green)]">
          <h4 className="text-xl">DarkDev Donator</h4>
          <div className="price flex space-x-2 items-baseline my-2">
            <h1 className="text-[40px] font-bold">Donate</h1>
          </div>
          <div className="content text-[var(--primary-grey)]">
            Support us to keep courses free. Every contribution helps!
          </div>
          <div className="flex justify-center text-center my-4">
            <Link
              href="/"
              className="rounded-full block border-2 w-[80%] py-2 hover:bg-[var(--primary-white)] hover:text-[var(--primary-black)] transition-[0.8s]"
            >
              Donate us!
            </Link>
          </div>
          <ul className="text-[var(--primary-grey)] list-disc list-inside">
            <li>Keep courses free</li>
            <li>Support our mission</li>
          </ul>
        </div>

        <div className="card hover:border-[#AFA8FF] text-[#AFA8FF]">
          <div className="flex items-center justify-between">
            <h4 className="text-xl">DarkDev Plus</h4>
            <p className="bg-[var(--primary-white)] text-xs py-2 px-2 rounded-md text-[var(--primary-black)]">
              Popular🔥
            </p>
          </div>
          <div className="price flex space-x-2 items-baseline my-2">
            <h1 className="text-[40px] font-bold">$2.99</h1>
            <p>/ MONTH</p>
          </div>
          <div className="content text-[var(--primary-grey)]">
            For individuals who want access to some of the exclusive resources.
          </div>
          <div className="flex justify-center text-center my-4">
            <Link
              href="/"
              className="rounded-full block border-2 w-[80%] py-3 hover:bg-[var(--primary-white)] hover:text-[var(--primary-black)] transition-[0.8s]"
            >
              Get Plus
            </Link>
          </div>
          <ul className="text-[var(--primary-grey)] list-disc list-inside">
            <li>Everything in DarkDev</li>
            <li>Priority support</li>
          </ul>
        </div>

        <div className="card hover:border-[#FF9BFA] text-[#FF9BFA]">
          <h4 className="text-xl">DarkDev Premium</h4>
          <div className="price flex space-x-2 items-baseline my-2">
            <h1 className="text-[40px] font-bold">$49.99</h1>
            <p>/ FOREVER</p>
          </div>
          <div className="content text-[var(--primary-grey)]">
            For individuals who want to join us with lifetime commitment.
          </div>
          <div className="flex justify-center text-center my-4">
            <Link
              href="/"
              className="rounded-full block border-2 w-[80%] py-4 hover:bg-[var(--primary-white)] hover:text-[var(--primary-black)] transition-[0.8s]"
            >
              Get Premium
            </Link>
          </div>
          <ul className="text-[var(--primary-grey)] list-disc list-inside">
            <li>Everything in DarkDev</li>
            <li>Priority support</li>
            <li>Lifetime membership</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
