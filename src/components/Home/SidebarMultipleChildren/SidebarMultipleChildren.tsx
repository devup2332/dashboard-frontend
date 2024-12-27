import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  opt: {
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    label: string;
    path: string;
    children: {
      label: string;
      path: string;
    }[];
  };
}

const SidebarMultipleChildren = ({ opt }: Props) => {
  const children = opt.children.map((child) => ({
    ...child,
    path: `${opt.path}${child.path}`,
  }));
  const path = usePathname();
  const { isOpen } = useSidebarStore((state) => state);
  const router = useRouter();
  const [isOpenOption, setIsOpenOption] = useState(false);
  const parentSelected = children.find((child) => path === child.path);
  const size = opt.children?.length * 40 + 20;
  console.log({
    parentSelected,
    path,
    isOpen,
    isOpenOption,
  });

  const toggleOptions = () => {
    router.push(`${children[0].path}`);
    setIsOpenOption(!isOpenOption);
  };
  useEffect(() => {
    !parentSelected && setIsOpenOption(false);
  }, [path]);

  return (
    <div
      className={cn(
        "overflow-y-hidden rounded-md transition-all",
        parentSelected && "bg-option-bg-color",
      )}
      style={{
        height: isOpenOption && parentSelected && isOpen ? `${size}px` : "48px",
      }}
    >
      <div
        onClick={toggleOptions}
        className={cn(
          "flex justify-between items-center py-3 px-3 cursor-pointer overflow-y-hidden transition-all group",
        )}
      >
        <div className="flex gap-6 items-center">
          <opt.Icon
            className={cn(
              "text-secondary-text-color stroke-current w-6 h-6 group-hover:text-primary-text-color",
              parentSelected && "text-primary-color stroke-current",
            )}
          />
          <p
            className={cn(
              "text-secondary-text-color font-medium group-hover:text-primary-text-color select-none",
              parentSelected && "text-primary-color font-bold",
            )}
          >
            {opt.label}
          </p>
        </div>
        <ArrowRightIcon
          className={cn(
            "w-6 h-6 stroke-current text-secondary-text-color -rotate-90 transition-all",
            parentSelected && "text-primary-color",
            isOpenOption && "rotate-0",
          )}
        />
      </div>

      {children && (
        <div className="flex flex-col gap-2 pl-6 ml-6 pr-4 border-l-2 border-solid border-primary-color">
          {children.map((child, index) => {
            return (
              <Link
                key={index}
                href={child.path}
                className={cn(
                  "text-secondary-text-color py-2 px-4 rounded-md hover:bg-secondary-bg-color text-sm select-none",
                  path === child.path &&
                    "text-primary-text-color font-semibold",
                )}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarMultipleChildren;
