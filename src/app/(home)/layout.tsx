import Header from "@/components/global/Header/Header";
import Sidebar from "@/components/global/Sidebar/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-4 gap-4 flex max-w-[2500px] mx-auto h-screen">
      <Sidebar />
      <div className="flex flex-col text-white gap-4 flex-1">
        <Header />
        <div className="py-8 px-8 rounded-md transition-colors bg-secondary-bg-color text-primary-text-color overflow-y-auto customScroll h-[calc(100vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
