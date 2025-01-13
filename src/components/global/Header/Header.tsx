"use client";
import CloseSidebarIcon from "@/components/Icons/CloseSidebarIcon";
import OpenSidebarIcon from "@/components/Icons/OpenSidebarIcon";
import { useSidebarStore, useThemeStore } from "@/store";
import React from "react";
import SunIcon from "@/components/Icons/SunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import BellIcon from "@/components/Icons/BellIcon";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import CustomInput from "@/components/global/CustomInput";
import { Button } from "@/components/ui/button";

const userImage =
  "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebarStore((state) => state);
  const { t } = useTranslation();
  const haveNotifications = true;
  const { theme, setTheme } = useThemeStore((state) => state);

  const showNotifications = () => {};
  return (
    <header className="px-6 items-center h-20 bg-secondary-bg-color rounded-xl flex justify-between select-none transition-colors">
      <div className="flex gap-6 items-center">
        <Button
          variant="ghost"
          className="p-2 w-10 h-10"
          onClick={() => toggleSidebar()}
        >
          {isOpen ? (
            <CloseSidebarIcon className="text-secondary-text-color fill-current" />
          ) : (
            <OpenSidebarIcon className="text-secondary-text-color fill-current" />
          )}
        </Button>
        <h1 className="text-2xl text-primary-text-color font-normal ">
          {t("home.header.greeting")}
          <span className="font-bold text-primary-color"> Jhon Doe</span>
        </h1>
      </div>
      <div className="flex justify-between grow-1 gap-6 items-center w-3/12 min-w-[526px]">
        <CustomInput
          containerClassName="w-full rounded-[10px]"
          Icon={
            <SearchIcon className="text-secondary-text-color stroke-current w-6 h-6" />
          }
          className="placeholder:text-secondary-text-color placeholder:font-medium"
          placeholder={t("home.header.search.placeholder")}
        />
        <button
          className="w-6 h-6 shrink-0"
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

        <Image
          src={userImage}
          width={48}
          height={48}
          alt="User Image"
          className="w-12 h-12 shrink-0 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
