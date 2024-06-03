import React from "react";
import Link from "next/link";

export default function Bracket(props: { text: string }) {
  return (
    <div className="flex items-center space-x-1 max-w-[400px]">
      <h1 className="text-[70px] select-none font-mono">{"{"}</h1>
      <p className="text-[18px] w-fit text-center leading-none">{props.text}</p>
      <h1 className="text-[70px] select-none font-mono">{"}"}</h1>
    </div>
  );
}
