import { useState, useEffect, type ReactNode } from "react";
import X from "../../svg/X";

type ReadMoreProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ReadMore = ({ isOpen, onClose, children }: ReadMoreProps) => {
  const [show, setShow] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative bg-Grey-10 border border-Purple-60/20 rounded-2xl p-8 max-w-2xl w-full shadow-2xl transition-all duration-300 transform ${
          animate
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-Grey-60 hover:text-White transition-colors duration-200 rounded-full bg-White/10 hover:bg-White/20"
        >
          <X className="w-4 h-4 text-inherit" />
        </button>

        {/* Header with Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Outer ring animation */}
            <div className="absolute inset-0 w-16 h-16 border-2 border-Purple-60/30 rounded-full animate-ping"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-2 border-Purple-60/20 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Main icon */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-Purple-60 to-Purple-75 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-8 h-8 animate-bounce-slow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-Purple-60/20 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-Purple-75/30 rounded-full"></div>
        <div className="absolute top-1/2 -left-3 w-2 h-2 bg-Purple-60/30 rounded-full"></div>
        <div className="absolute top-1/4 -right-2 w-2.5 h-2.5 bg-Purple-75/20 rounded-full"></div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ReadMore;