import { useEffect, useState, type JSX, type MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../components/sharedComponents/Logo";
import X from "../../svg/X";
import WavyBackdrop from "../../svg/WavyBackdrop";
import LightDarkBtn from "../../components/kit/LightDarkBtn";
import { BANNER_PATH } from "../../svg/Paths";
// import { toggleTheme } from "../../redux/Slices/themeSlice";
import type { RootState } from "../../redux/store";

type NavItem = {
  name: string;
  path: string;
};

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [showSlidingDiv, setShowSlidingDiv] = useState<boolean>(false);
  
  // const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
    scrollTop();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    toggleMenu();
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    const baseStyles =
      "text-White xl:py-3.5 md:py-3 transition-all ease-in-out duration-1000";
    const activeStyles = "bg-Grey-08 border-Grey-15 md:px-5 xl:px-6 rounded-lg";
    const inactiveStyles = "border-Grey-10";

    return isActive
      ? `${baseStyles} ${activeStyles}`
      : `${baseStyles} ${inactiveStyles}`;
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handleThemeToggle = () => {
  //   dispatch(toggleTheme());
  // };

  return (
    <>
      {/* Dismissible Top Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 w-full px-4 lg:px-8 bg-Grey-10 border-b border-Grey-15 z-[1100] h-[49px] xl:h-[63px] flex items-center overflow-hidden">
          <div className="relative w-full h-full text-center flex">
            <div className="absolute inset-0 w-[300%] -left-[100%] md:w-[110%] h-[1150%] -top-[410%] md:-left-[5%] object-cover">
              <WavyBackdrop paths={BANNER_PATH} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full xl:text-lg md:text-sm xs:text-[12px] pr-6.5 text-[10px]">
              <span className=" text-White xl:pr-2.5 pr-1.5">
                ✨Discover Your Dream Property with Estatein
              </span>
              <NavLink
                to="/properties"
                className="underline hover:text-Purple-75 transition-colors duration-200 cursor-pointer"
              >
                Learn More
              </NavLink>
            </div>
            <button
              aria-label="Close banner"
              onClick={() => setShowBanner(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-White hover:text-Purple-75 rounded-full w-6.5 xl:w-8 h-6.5 xl:h-8 flex items-center justify-center bg-White/10"
            >
              <X className="w-[9px] h-[9px] xl:w-3 xl:h-3 text-inherit" />
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed md:hidden top-0 left-0 w-screen h-screen bg-Grey-10 opacity-60 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <nav
        className={`fixed left-0 w-full xl:h-[99px] md:h-[77px] z-[1000] flex justify-between items-center px-4 md:px-[5.5555%] xl:px-[8.4375%] xl:py-0 md:py-0 py-5 bg-Grey-10 shadow transition-all duration-300 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] ${
          showBanner ? "top-[49px] xl:top-[63px]" : "top-0"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex gap-6 xl:text-lg items-center absolute left-1/2 transform -translate-x-1/2" data-aos="fade-up">
          {navLinks.slice(0, 4).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkStyles}
              onClick={scrollTop}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Link (Desktop) */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }: { isActive: boolean }) =>
              `${
                isActive ? "text-white bg-Purple-60" : "xl:text-lg text-White"
              } xl:py-4 xl:px-6 md:py-3.5 md:px-5 rounded-lg border border-Grey-15 hover:bg-gradient-to-br hover:from-40%
              hover:from-Purple-75 hover:via-50% hover:via-Purple-90 hover:to-70% hover:to-Purple-75
              dark:hover:from-Purple-65/65 dark:hover:via-Purple-75 dark:hover:to-Purple-65/65 
                bg-[length:200%_200%] bg-[position:0%_0%] transition-[background-position] duration-500 ease-in-out hover:bg-[position:100%_100%]`
            }
            onClick={scrollTop}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden flex justify-center items-center w-7 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
        >
          <div className="w-[21px] h-[14px] flex flex-col justify-between items-center">
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[6px] bg-White" : "bg-White"
              }`}
            />
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "bg-White"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-[-45deg] -translate-y-[6px] w-full bg-White"
                  : "w-[54%] self-end bg-White"
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Sliding Div with Arrow */}
      <div
        className={`fixed md:right-[11.5px] max-md:hidden xl:right-[20.5px] translate-x-0 mr-[4.1025%] md:mr-[5.5555%] xl:mr-[8.4375%] transform z-[999] transition-all duration-500 ease-out ${
          showBanner
            ? "md:top-[calc(48px+77px)] xl:top-[calc(62px+99px)]"
            : "md:top-[calc(77px)] xl:top-[calc(99px)]"
        }
        ${showSlidingDiv ? "translate-y-0" : "translate-y-[-58px]"}`}
      >
        {/* Theme Switch Container - Slides with arrow */}
        <div className={`transition-all duration-500 ease-out`}>
          {/* Content container */}
          <div className="bg-Grey-10/90 rounded-lg p-2 shadow-[0_0_20px_rgba(112,59,247,0.3)] backdrop-blur-sm relative overflow-hidden group">
            {/* Neon Glow Background */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-Purple-60/10 via-Purple-75/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-Purple-60/50 via-Purple-75/30 to-Purple-60/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

            {/* Light/Dark Theme Switch */}
            <div className="relative z-10">
              <LightDarkBtn />
            </div>

            {/* Floating Neon Particles */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-Purple-60 rounded-full opacity-60 animate-pulse"></div>
            <div
              className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-Purple-75 rounded-full opacity-40 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Arrow Button Container with Theme Icons */}
        <div className="relative w-full items-center flex flex-col">
          {/* Theme Icons Above Arrow */}
          <div
            className={`flex items-center transition-all duration-500 ease-out justify-between gap-2 p-1 rounded-b-lg bg-Grey-10/90 border border-t-0 border-Purple-60/30 shadow-[0_0_15px_rgba(112,59,247,0.2)] backdrop-blur-sm relative overflow-hidden group hover:shadow-[0_0_25px_rgba(112,59,247,0.4)] ${
              showSlidingDiv ? "hidden" : "w-max"
            }`}
          >
            {/* Neon Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-Purple-60/5 via-transparent to-Purple-75/5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-b-lg bg-gradient-to-r from-Purple-60/40 via-Purple-75/20 to-Purple-60/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

            {/* Floating Neon Orbs */}
            <div
              className="absolute top-0 left-1/4 w-1 h-1 bg-Purple-60 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-Purple-75 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-bounce transition-all duration-500"
              style={{ animationDelay: "0.3s" }}
            ></div>

            {/* Sun Icon */}
            <div
              className="p-1 rounded-lg transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-500 ease-out ${
                  !darkMode
                    ? "text-Purple-75 drop-shadow-[0_0_25px_rgba(112,59,247,0.8)]"
                    : "text-Grey-08 group-hover:text-Purple-75 group-hover:drop-shadow-[0_0_8px_rgba(112,59,247,0.6)]"
                }`}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Active State Glow Effect */}
            {!darkMode && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-Purple-60/10 via-transparent to-transparent animate-pulse"></div>
            )}

                        {/* Moon Icon */}
            <div
              className="p-1 rounded-b-lg transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-500 ease-out ${
                  darkMode
                    ? "text-Purple-75 drop-shadow-[0_0_16px_rgba(112,59,247,0.8)]"
                    : "text-Grey-08 group-hover:text-Purple-75 group-hover:drop-shadow-[0_0_8px_rgba(112,59,247,0.6)]"
                }`}
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Active State Glow Effect */}
            {darkMode && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-Purple-60/10 via-transparent to-transparent animate-pulse"></div>
            )}
          </div>

          

          {/* Arrow Button - Centered */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                console.log("Arrow clicked! Current state:", showSlidingDiv);
                setShowSlidingDiv(!showSlidingDiv);
              }}
              className={`relative  bg-Grey-10/90 border border-Purple-60/40 rounded-b-lg hover:border-Purple-75 hover:bg-Purple-60/10 transition-all duration-500 ease-out group hover:scale-105 shadow-[0_0_12px_rgba(112,59,247,0.25)] hover:shadow-[0_0_20px_rgba(112,59,247,0.4)] ${
                showSlidingDiv ? "w-10 h-6" : "w-6 h-4"
              }`}
            >
              {/* Arrow Icon */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                  showSlidingDiv ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-Purple-75 group-hover:text-Purple-60 transition-colors duration-200"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-Purple-60/10 to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 w-1/2 bg-Grey-10 z-50 transform transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] md:hidden ${
          showBanner
            ? "top-[49px] xl:top-[63px] h-[calc(100%-49px)] xl:h-[calc(100%-63px)]"
            : "top-0 h-screen"
        } ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mt-[68.58px] flex flex-col items-start">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `w-full p-5 text-White ${
                  isActive ? "border-l-2 border-Purple-75 font-semibold" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          <div className="mt-auto w-full p-5 flex justify-center">
            {isMenuOpen && <LightDarkBtn />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
