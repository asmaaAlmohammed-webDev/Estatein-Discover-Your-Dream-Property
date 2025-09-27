import React, { useEffect, useState } from "react";

interface SuccessMessageProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  isVisible,
  onClose,
  title = "Message Sent Successfully!",
  message = "Thank you for your inquiry. We'll get back to you soon.",
  autoClose = true,
  autoCloseDelay = 5000,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);

      if (autoClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);

        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for fade out animation
  };

  if (!isVisible && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Success Card */}
      <div
        className={`relative bg-Grey-10 border border-Purple-60/20 rounded-2xl p-8 max-w-md w-full shadow-2xl transition-all duration-300 transform ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-Grey-60 hover:text-White transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Success Icon */}
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
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                className="animate-check"
              >
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-White mb-3 font-urbanist">
            {title}
          </h3>
          <p className="text-Grey-60 text-sm leading-relaxed mb-6">{message}</p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-Purple-60 text-white rounded-lg font-medium hover:bg-Purple-65 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-Purple-60/20 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-Purple-75/30 rounded-full"></div>
      </div>
    </div>
  );
};

export default SuccessMessage;
