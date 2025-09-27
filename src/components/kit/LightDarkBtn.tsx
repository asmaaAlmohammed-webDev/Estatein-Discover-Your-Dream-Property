import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/Slices/themeSlice";

const LightDarkBtn: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme.darkMode
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const particles = [
    { top: "70%", left: "30%", delay: "0.2s" },
    { top: "60%", left: "60%", delay: "0.6s" },
    { top: "50%", left: "40%", delay: "1s" },
    { top: "40%", left: "70%", delay: "1.4s" },
    { top: "80%", left: "50%", delay: "1.8s" },
  ];
  const rings = [
    {
      size: "30px",
      borderTop: "rgba(0,150,255,0.5)",
      borderRight: "rgba(0,150,255,0.3)",
      duration: "3s",
      reverse: false,
    },
    {
      size: "20px",
      borderBottom: "rgba(0,150,255,0.5)",
      borderLeft: "rgba(0,150,255,0.3)",
      duration: "2s",
      reverse: true,
    },
    {
      size: "10px",
      borderLeft: "rgba(0,150,255,0.5)",
      borderTop: "rgba(0,150,255,0.3)",
      duration: "1.5s",
      reverse: false,
    },
  ];
  const lines = [
    { w: "15px", h: "1px", bottom: "2px", left: "20px" },
    { w: "1px", h: "8px", bottom: "5px", left: "35px" },
    { w: "25px", h: "1px", bottom: "8px", left: "15px" },
    { w: "15px", h: "1px", bottom: "4px", right: "2px" },
    { w: "1px", h: "8px", bottom: "2px", right: "3.5px" },
    { w: "25px", h: "1px", bottom: "7px", right: "1px" },
  ];

  return (
    <div className="switch-wrapper relative">
      <div className="toggle-container relative w-15 md:w-20 flex flex-col items-center perspective-[800px] z-10">
        <div className="toggle-wrap relative w-full h-7.5 md:h-10 transform-3d">
          <input
            className="toggle-input absolute opacity-0 w-0 h-0"
            id="holo-toggle"
            type="checkbox"
            checked={darkMode}
            onChange={handleToggle}
          />
          <label
            className="toggle-track absolute w-full h-full bg-[#a685fa80] rounded-4xl overflow-hidden backdrop-blur-[5px] border border-[#a685fa]
          before:content-none before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-[6%]
          after:content-none after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:h-1 after:opacity-[7%] after:rounded-t-4xl after:rounded-l-4xl 
          "
            htmlFor="holo-toggle"
          >
            <div className="track-lines absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 overflow-hidden">
              <div className="track-line absolute top-0 left-0 w-full h-full" />
            </div>
            <div className="toggle-thumb absolute w-6 md:w-8.5 h-6 md:h-8.5 left-[2.5px] top-[2.5px] rounded-full z-20 border border-[#a685fa] overflow-hidden transform-3d">
              <div className="thumb-core absolute w-5 h-5 top-1/2 left-1/2 translate-[-50%,-50%] rounded-full opacity-90" />
              <div className="thumb-inner absolute w-3 h-3 top-1/2 left-1/2 rounded-full opacity-70 translate-[-50%,-50%]" />
              <div className="thumb-scan absolute w-full h-1 top-0 left-0 blur-[1px] opacity-70" />
              <div className="thumb-particles absolute inset-0 overflow-hidden">
                {particles.map((p, i) => (
                  <div
                    key={i}
                    className="absolute w-[3px] h-[3px] rounded-full bg-[#f2effc80] shadow-[0_0_5px_(#a685fa80)] thumb-particle opacity-0"
                    style={{
                      top: p.top,
                      left: p.left,
                      animationDelay: p.delay,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="toggle-data absolute w-full h-full z-10">
              <div className="status-indicator off absolute w-2.5 h-2.5 rounded-full translate-y-[-50%] top-1/2 right-2" />
              <div className="status-indicator on absolute w-2.5 h-2.5 rounded-full translate-y-[-50%] top-1/2 left-2" />
            </div>
            <div className="energy-rings absolute w-3 h-3 left-0.5 top-0.5 pointer-events-none z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
              {rings.map((r, i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 left-1/2 rounded-full border-2 border-transparent opacity-0 energy-ring`}
                  style={{
                    width: r.size,
                    height: r.size,
                    borderTopColor: r.borderTop,
                    borderRightColor: r.borderRight,
                    borderBottomColor: r.borderBottom,
                    borderLeftColor: r.borderLeft,
                    animationDuration: r.duration,
                    animationDirection: r.reverse ? "reverse" : "normal",
                  }}
                />
              ))}
            </div>
            <div className="interface-lines absolute inset-0 pointer-events-none">
              {lines.map((l, i) => (
                <div
                  key={i}
                  className="absolute bg-[#625f6b4d] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    width: l.w,
                    height: l.h,
                    bottom: l.bottom,
                    left: l.left,
                    right: l.right,
                  }}
                />
              ))}
            </div>
            <div className="toggle-reflection absolute inset-0 rounded-4xl pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_40%)]" />
            <div className="holo-glow absolute inset-0 rounded-4xl blur-[10px] opacity-50 z-0 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.2)_0%,rgba(0,0,0,0)_70%)]" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default LightDarkBtn;
