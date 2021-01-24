import {memo} from "react";
import ColorModeButton from "./ColorModeButton";

const Header = memo(() => {
  return (
      <header
          className="fixed top-0 left-0 z-50 w-full h-12 bg-white shadow-sm dark:bg-black"
          onClick={() => window.scrollTo(0, 0)}
      >
        <div className="relative my-0 mx-4 mx-auto max-w-4xl h-full text-center inner">
          <p className="text-2xl font-bold leading-loose text-black cursor-pointer dark:text-white">
            Git Explore
          </p>
          <ColorModeButton/>
        </div>
      </header>
  );
});
export default Header;
