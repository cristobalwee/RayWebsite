import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "../contexts/LenisContext";
import { usePageTransition } from "../contexts/PageTransitionContext";

const Header = () => {
  const { lenisRef } = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { startTransition, markLeavingIndex } = usePageTransition();

  const isPreviewPage = location.pathname.startsWith("/preview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigateToPreview = async (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    markLeavingIndex();
    await startTransition();
    navigate("/preview");
  };

  const handleNavigateToHome = async (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    await startTransition();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm p-6 md:px-10 ${
        isScrolled ? "md:py-4" : "md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {isPreviewPage ? (
          <Link
            to="/"
            onClick={handleNavigateToHome}
            className="text-xl md:text-2xl font-bold logo cursor-pointer"
          >
            Ray<span className="text-[#C6698B]">.</span>
          </Link>
        ) : (
          <a
            className="text-xl md:text-2xl font-bold logo cursor-pointer"
            onClick={() => lenisRef.current.scrollTo(0, 0)}
          >
            Ray<span className="text-[#C6698B]">.</span>
          </a>
        )}

        <nav className="flex items-center space-x-4 md:space-x-8">
          {isPreviewPage ? (
            <Link
              to="/"
              onClick={handleNavigateToHome}
              className="hidden md:block transition-all duration-300 hover:text-[#AAA] hover:scale-105 cursor-pointer text-sm md:text-base"
            >
              Exit preview
            </Link>
          ) : (
            <Link
              to="/preview"
              onClick={handleNavigateToPreview}
              className="hidden md:block transition-all duration-300 hover:text-[#AAA] hover:scale-105 cursor-pointer text-sm md:text-base"
            >
              Try the free preview
            </Link>
          )}
          <a
            href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#464646] rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Get the App
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
