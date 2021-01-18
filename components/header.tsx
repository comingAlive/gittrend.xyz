const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full h-12 bg-white shadow-sm"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="relative my-0 mx-4 mx-auto max-w-7xl h-full text-center inner">
          <p className="text-2xl font-bold leading-loose text-black cursor-pointer">
            Git Explore
          </p>
      </div>
    </header>
  );
};
export default Header;
