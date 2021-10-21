import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 h-auto font-medium bg-white rounded border-l-8 border-gray-500 dark:bg-black">
      <div className="flex justify-between items-center">
        <div className="w-full text-center py-2">
          <span className="mr-1">Created by</span>
          <Link href={"https://t.me/aiwon"}>
            <a className="text-blue-600 dark:text-blue-400">Max</a>
          </Link>
          .
        </div>
      </div>
    </footer>
  );
};
export default Footer;
