"use client";
import MainLogoIcon from "@/components/Icons/MainLogoIcon";
import { useSidebarStore } from "@/store";
import { options } from "@/utils/sidebar";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SidebarMultipleChildren from "@/components/global/SidebarMultipleChildren/SidebarMultipleChildren";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const isOpen = useSidebarStore((state) => state.isOpen);
  return (
    <div
      className={cn(
        "bg-secondary-bg-color px-2 py-9 top-0 left-0 h-full overflow-x-hidden customScroll sticky rounded-md transition-all",
        isOpen ? "w-[284px]" : "w-[72px]",
      )}
    >
      <Link
        href="/dashboard"
        className="flex gap-6 px-4 w-[268px] cursor-pointer"
      >
        <div className="w-6 h-6">
          <MainLogoIcon className="mt-1 text-primary-color stroke-current w-full h-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary-text-color">
            Growing Up
          </h1>
          <p className="text-xs text-secondary-text-color">
            {t("home.sidebar.header.subtitle")}
          </p>
        </div>
      </Link>

      <section className="px-0 mt-14 w-[268px]">
        {options.map((opt, index) => {
          return opt.children ? (
            <SidebarMultipleChildren opt={opt} key={index} />
          ) : (
            <div
              key={index}
              onClick={() => router.push(opt.path)}
              className={cn(
                "flex py-3 px-4 rounded-md gap-6 cursor-pointer group h-12 overflow-y-hidden",
                path === opt.path ? "bg-option-bg-color" : "",
              )}
            >
              <div className="w-6 h-6">
                <opt.Icon
                  className={cn(
                    path === opt.path
                      ? "text-primary-color stroke-current"
                      : "text-secondary-text-color stroke-current",
                    "group-hover:text-primary-text-color w-full h-full",
                  )}
                />
              </div>
              <p
                className={cn(
                  path === opt.path
                    ? "text-primary-color font-bold"
                    : "text-secondary-text-color font-medium",
                  "group-hover:text-primary-text-color text-sm select-none",
                )}
              >
                {t(opt.label)}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Sidebar;
