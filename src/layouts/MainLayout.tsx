import { Outlet } from "react-router-dom";
import Navbar from "../sections/sharedSections/Navbar";
import Footer from "../sections/sharedSections/Footer";
import ChatButton from "../ChatBot/ChatButton";
import ChatBot from "../ChatBot/ChatBot";
import { useState } from "react";
import BackToTop from "../components/kit/BackToTop";
const MainLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };


  return (
    <div className="cursor-custom-default">
      <Navbar />
      <BackToTop/>
      <main className="">
        <Outlet />
      </main>
      <Footer />

       <ChatButton onClick={toggleChat} />
      
       <ChatBot isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default MainLayout;

 