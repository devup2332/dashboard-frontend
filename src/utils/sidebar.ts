import DashboardIcon from "@/components/Icons/DashboardIcon";
import InvectaryIcon from "@/components/Icons/InvectaryIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import ReportsIcon from "@/components/Icons/ReportsIcon";
import SalesIcon from "@/components/Icons/SalesIcon";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import TeamIcon from "@/components/Icons/TeamIcon";
export const options = [
  {
    label: "Dashboard",
    Icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "Inventary",
    Icon: InvectaryIcon,
    path: "/inventary",
    children: [
      {
        label: "Products",
        path: "/products",
      },
      {
        label: "Categories",
        path: "/categories",
      },
      {
        label: "Invoices",
        path: "/invoices",
      },
    ],
  },
  {
    label: "Sales",
    Icon: SalesIcon,
    path: "/sales",
    children: [
      {
        label: "Products",
        path: "/products",
      },
      {
        label: "Categories",
        path: "/categories",
      },
      {
        label: "Invoices",
        path: "/invoices",
      },
    ],
  },
  {
    label: "Team",
    Icon: TeamIcon,
    path: "/team",
  },
  {
    label: "Settings",
    Icon: SettingsIcon,
    path: "/settings",
  },
  {
    label: "Reports",
    Icon: ReportsIcon,
    path: "/reports",
  },
  {
    label: "Profile",
    Icon: ProfileIcon,
    path: "/profile",
  },
];
