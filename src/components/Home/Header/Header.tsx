"use client";
import CloseSidebarIcon from "@/components/Icons/CloseSidebarIcon";
import OpenSidebarIcon from "@/components/Icons/OpenSidebarIcon";
import { useSidebarStore, useThemeStore } from "@/store";
import React from "react";
import SunIcon from "@/components/Icons/SunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import InputIcon from "@/components/general/InputIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import BellIcon from "@/components/Icons/BellIcon";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebarStore((state) => state);
  const haveNotifications = true;
  const { theme, setTheme } = useThemeStore((state) => state);

  const showNotifications = () => {};
  return (
    <header className="px-6 items-center h-20 bg-secondary-bg-color transition-colors rounded-xl flex justify-between">
      <div className="flex gap-6 items-center">
        <button className=" p-2 w-10 h-10" onClick={() => toggleSidebar()}>
          {isOpen ? (
            <CloseSidebarIcon className="text-secondary-text-color fill-current" />
          ) : (
            <OpenSidebarIcon className="text-secondary-text-color fill-current" />
          )}
        </button>
        <h1 className="text-2xl text-primary-text-color font-normal ">
          Good Morning
          <span className="font-bold text-primary-color"> Jhon Doe</span>
        </h1>
      </div>
      <div className="flex justify-between gap-6 items-center">
        <InputIcon
          Icon={
            <SearchIcon className="text-secondary-text-color stroke-current w-6 h-6" />
          }
          placeholder="Search a product"
        />
        <button
          className="w-6 h-6"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <SunIcon className="w-full h-full text-primary-text-color stroke-current" />
          ) : (
            <MoonIcon className="w-full h-full text-primary-text-color stroke-current" />
          )}
        </button>
        <button onClick={showNotifications} className="relative">
          <BellIcon className="w-6 h-6 text-primary-text-color stroke-current" />
          {haveNotifications && (
            <span className="w-3 h-3 bg-danger-bg-color absolute bottom-0 right-0 rounded-full" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
