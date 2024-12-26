"use client";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import MainLogoIcon from "@/components/Icons/MainLogoIcon";
import { useSidebarStore } from "@/store";
import { options } from "@/utils/sidebar";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();
  const isOpen = useSidebarStore((state) => state.isOpen);
  return (
    <div
      className={cn(
        "bg-secondary-bg-color px-2 py-9 top-0 left-0 h-screen transition-all overflow-x-hidden",
        isOpen ? "w-[284px]" : "w-[80px]",
      )}
    >
      <Link
        href="/dashboard"
        className="flex gap-6 px-6 w-[268px] cursor-pointer"
      >
        <div className="w-6 h-6">
          <MainLogoIcon className="mt-1 text-primary-color stroke-current w-full h-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary-text-color">
            Growing Up
          </h1>
          <p className="text-xs text-[#839ABE]">Sales app administrator</p>
        </div>
      </Link>

      <section className="px-3 mt-14 w-[274px]">
        {options.map((opt, index) => {
          const size = opt.children ? opt.children?.length * 40 + 30 : 48;
          console.log({ size });
          return (
            <Link
              href={opt.path}
              key={index}
              className={cn(
                "flex flex-col py-3 px-3 rounded-md gap-3 cursor-pointer group h-12 overflow-y-hidden transition-all",
                path === opt.path ? "bg-option-bg-color" : "",
              )}
              style={{
                height:
                  opt.children && opt.path === path ? `${size}px` : "48px",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="w-6 h-6">
                    <opt.Icon
                      className={cn(
                        path === opt.path
                          ? "text-primary-color stroke-current"
                          : "text-secondary-text-color stroke-current",
                        "group-hover:text-primary-text-color transition-colors w-full h-full",
                      )}
                    />
                  </div>
                  <p
                    className={cn(
                      path === opt.path
                        ? "text-primary-color font-bold"
                        : "text-secondary-text-color font-medium",
                      "group-hover:text-primary-text-color transition-colors text-sm",
                    )}
                  >
                    {" "}
                    {opt.label}
                  </p>
                </div>
                {opt.children && (
                  <ArrowRightIcon className="text-primary-color stroke-current h-4 w-4" />
                )}
              </div>

              {opt.children && (
                <div className=" pl-12 border-l-input-stroke-color border-l-2 ml-2">
                  {opt.children.map((child, index) => {
                    return (
                      <div key={index} className="text-sm py-1">
                        {child.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Sidebar;
