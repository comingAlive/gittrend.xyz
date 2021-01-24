import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import Dark from "./icons/Dark";
import Light from "./icons/Light";

const Footer = () => {
  return (
    <footer className="mt-4 h-auto bg-white dark:bg-black rounded font-medium border-l-8">
      <div className="flex justify-between items-center">
        <div className="w-full text-center">
          <span className="mr-1">Created by</span>
          <Link href={"https://garbuz.dev"}>
            <a className="text-blue-600">Max</a>
          </Link>
          .
        </div>
      </div>
    </footer>
  );
};
export default Footer;
