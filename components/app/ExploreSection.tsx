import React from "react";

export default function ExploreSection() {
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="lg:text-[78px] text-[60px] max-md:text-[42px] font-bold text-center my-8">
        Explore Best Courses
      </h1>
      <iframe
        width="360"
        height="225"
        className="m-4 max-md:hidden"
        src="https://www.youtube.com/embed/yp-SWnSjeAY?list=PLC-gjxSUxvZ9plmzCRLHqJOOAW5mOYCqO"
        title="Welcome To This Course: Flutter &amp; Dart full app development journey | Beginners to expert | #flutter"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="360"
        height="225"
        className="m-4"
        src="https://www.youtube.com/embed/v6ScPASAkUw"
        title="Realtime Chat App (Flutter &amp; Firebase) Introduction and Setup 01 | #flutter #animation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="360"
        height="225"
        className="m-4"
        src="https://www.youtube.com/embed/i5yc8kvIorQ"
        title="Rust for people who have never used a compiler | Rust programming language #rust #rustprogramming"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="360"
        height="225"
        className="m-4"
        src="https://www.youtube.com/embed/S65tLN_cKck"
        title="Ruby on Rails Advanced Authentication: Login, Social Login (Facebook, Google) | #authentication"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="360"
        height="225"
        className="m-4 max-md:hidden"
        src="https://www.youtube.com/embed/x_ev9NMJhMc"
        title="Introduction to the ultimate PHP, PDO &amp; MySQL course | #php #mysql"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="360"
        height="225"
        className="m-4"
        src="https://www.youtube.com/embed/o_wHu-V-HTI"
        title="Machine Learning A-Z, AI (Python &amp; R) Introduction | Welcome to the full #ai &amp; #ml course | #python"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
