import { useEffect } from "react";
import Container from "../layouts/Container";
import { Link, useLocation } from "react-router-dom";
import { termsData, contactInfo } from "../data/Legal/TermsData";

const Terms = () => {
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className="text-Grey-60 leading-relaxed mb-6 text-base">
          {paragraph}
        </p>
      ));
    }
    return <p className="text-Grey-60 leading-relaxed mb-6 text-base">{content}</p>;
  };

  const renderSubsections = (subsections: { title: string; content: string | string[] }[]) => {
    return subsections.map((subsection, index) => (
      <div key={index} className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-White border-l-4 border-Purple-60 pl-4">
          {subsection.title}
        </h3>
        {Array.isArray(subsection.content) ? (
          <ul className="list-disc list-inside text-Grey-60 space-y-3 ml-6">
            {subsection.content.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-Grey-60 leading-relaxed">{subsection.content}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-Grey-08 text-White mt-[68px] lg:mt-[77px] xl:mt-[99px]">
      {/* Enhanced Header with professional styling */}
      <div className="border-b border-Grey-15 relative overflow-hidden bg-gradient-to-b from-Grey-10 to-Grey-08">
        <div className="absolute inset-0 bg-gradient-to-r from-Purple-60/5 via-transparent to-Purple-60/5"></div>
        <Container className="py-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-Purple-60/10 rounded-full mb-6" data-aos="zoom-in">
              <svg className="w-8 h-8 text-Purple-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-urbanist mb-6 leading-tight" data-aos="fade-right">
              Terms of Use
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-Purple-60 to-Purple-75 mx-auto mb-6 rounded-full"></div>
            <p className="text-Grey-60 text-lg font-medium" data-aos="fade-left">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </Container>
      </div>

      {/* Enhanced Content with better structure */}
      <Container className="py-16">
        <div>
          <div className="bg-Grey-10 rounded-2xl p-8 md:p-12 shadow-2xl border border-Grey-15">
            <div className="space-y-12">
              {termsData.map((section, index) => (
                <section key={section.id} className="group" 
                data-aos="fade-up"
                data-aos-delay={index * 20}>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-Purple-60/20 rounded-full flex items-center justify-center">
                      <span className="text-Purple-60 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-6 font-urbanist text-White group-hover:text-Purple-60 transition-colors duration-300">
                        {section.title}
                      </h2>
                      
                      {section.subsections ? (
                        <div className="space-y-6">
                          {renderContent(section.content)}
                          {renderSubsections(section.subsections)}
                        </div>
                      ) : (
                        <div>
                          {renderContent(section.content)}
                          {section.id === "privacy" && (
                            <div className="mt-6 p-4 bg-Grey-15 rounded-lg border border-Grey-20">
                              <p className="text-Grey-60 leading-relaxed">
                                Please review our{" "}
                                <Link to="/privacy" className="text-Purple-60 hover:text-Purple-75 underline transition-colors font-medium">
                                  Privacy Policy
                                </Link>
                                , which also governs your use of the Service, to understand our practices.
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}

              {/* Enhanced Contact Information */}
              <section className="group" data-aos="zoom-in">
                <div className="bg-gradient-to-br from-Grey-15 to-Grey-10 rounded-xl p-8 border border-Grey-20 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-Purple-60/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-Purple-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-White">Contact Information</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-White font-semibold">{contactInfo.company}</p>
                      <p className="text-Grey-60 flex items-center space-x-2">
                        <svg className="w-4 h-4 text-Purple-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{contactInfo.email}</span>
                      </p>
                      <p className="text-Grey-60 flex items-center space-x-2">
                        <svg className="w-4 h-4 text-Purple-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{contactInfo.phone}</span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-Grey-60 flex items-start space-x-2">
                        <svg className="w-4 h-4 text-Purple-60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{contactInfo.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Back to Home button */}
              <div className="text-center pt-8 border-t border-Grey-15 text-white" >
                <Link 
                  to="/" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-Purple-60 to-Purple-65 rounded-xl hover:from-Purple-65 hover:to-Purple-70 transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  data-aos="zoom-in"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
