import { useEffect } from "react";
import Container from "../layouts/Container";
import { faqSectionData } from "../data/Home/HomeData";
import FAQCard from "../components/cards/FAQCard";
import { Link } from "react-router-dom";

const FAQ = () => {
  useEffect(() => {
    // Only scroll to top when the page is first loaded, not on every location change
    window.scrollTo(0, 0);
  }, []); // Empty dependency array - only runs once when component mounts

  return (
    <div className="min-h-screen pt-[108px] lg:pt-[77px] xl:pt-[99px]">
      {/* Hero Section with Neon Effects */}
      <section className="relative overflow-hidden bg-gradient-to-br from-Grey-08 via-Grey-10 to-Grey-08 py-20 md:py-30 xl:py-37.5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating neon orbs */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-Purple-60/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-6 h-6 bg-Purple-75/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-3 h-3 bg-Purple-60/40 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-5 h-5 bg-Purple-75/25 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Neon grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-60 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-75 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-60 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-75 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-60 to-transparent"></div>
          </div>

          {/* Vertical neon lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-Purple-60 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-Purple-75 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-Purple-60 to-transparent"></div>
          </div>
        </div>

        <Container>
          <div className="text-center relative z-10">
            {/* Main Title with Neon Glow */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-White mb-6 font-urbanist relative">
              Frequently Asked Questions
              <div className="absolute inset-0 bg-gradient-to-r from-Purple-60 via-Purple-75 to-Purple-60 blur-2xl opacity-20 animate-pulse"></div>
            </h1>

            {/* Subtitle with Neon Accent */}
            <p className="text-lg md:text-xl xl:text-2xl text-Grey-60 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our real estate
              services.
              <span className="text-Purple-75 font-semibold animate-pulse">
                {" "}
                Everything you need to know.
              </span>
            </p>

            {/* Stats with Neon Borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-10 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="bg-Grey-10 border border-Purple-60/30 rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:border-Purple-60 group-hover:shadow-[0_0_20px_rgba(112,59,247,0.3)]">
                  <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-Purple-75 mb-2 animate-pulse">
                    {faqSectionData.faqs.length}+
                  </div>
                  <div className="text-Grey-60 text-sm md:text-base">
                    Questions Answered
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-Grey-10 border border-Purple-60/30 rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:border-Purple-60 group-hover:shadow-[0_0_20px_rgba(112,59,247,0.3)]">
                  <div
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-Purple-75 mb-2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    24/7
                  </div>
                  <div className="text-Grey-60 text-sm md:text-base">
                    Support Available
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-Grey-10 border border-Purple-60/30 rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:border-Purple-60 group-hover:shadow-[0_0_20px_rgba(112,59,247,0.3)]">
                  <div
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-Purple-75 mb-2 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    100%
                  </div>
                  <div className="text-Grey-60 text-sm md:text-base">
                    Transparent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Grid Section */}
      <section className="py-20 md:py-30 xl:py-37.5 bg-Grey-08 relative">
        {/* Background neon effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-60 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-Purple-75 to-transparent"></div>
        </div>

        <Container>
          <div className="text-center mb-16 md:mb-20 xl:mb-25">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-White mb-6 font-urbanist relative">
              Common Questions
              <div className="absolute inset-0 bg-gradient-to-r from-Purple-60 via-Purple-75 to-Purple-60 blur-xl opacity-10 animate-pulse"></div>
            </h2>
            <p className="text-lg md:text-xl text-Grey-60 max-w-2xl mx-auto">
              Get instant answers to your questions about our real estate
              services and processes
            </p>
          </div>

          {/* FAQ Grid using FAQCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7.5 xl:gap-10">
            {faqSectionData.faqs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                showButton={true}
                withShadow={false}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 md:mt-20 xl:mt-25">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-Purple-60 to-Purple-75 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <Link to="/contact">
                <button className="relative bg-gradient-to-r from-Purple-60 to-Purple-75 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(112,59,247,0.4)]">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;
