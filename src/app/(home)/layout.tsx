import Header from "@/components/Home/Header/Header";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 flex-1 flex flex-col text-white gap-4 max-w-[2000px] mx-auto">
        <Header />
        <div className="py-8 px-12 rounded-md bg-secondary-bg-color flex-1 text-primary-text-color transition-colors">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
