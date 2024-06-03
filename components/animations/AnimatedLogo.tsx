"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function AnimatedLogo() {
  function animate() {
    gsap.to(".d1", { rotation: 360, duration: 2, repeat: -1 });
  }

  return (
    <Link href="/" className="text-3xl font-extrabold select-none">
      <i className="flex">
        <div className={``} onTouchMoveCapture={animate}>D</div>
        <div className="a">a</div>
        <div className="r">r</div>
        <div className="k">k</div>

        <div className="d2">D</div>
        <div className="e">e</div>
        <div className="v">v</div>
      </i>
    </Link>
  );
}
