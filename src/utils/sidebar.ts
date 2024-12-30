import DashboardIcon from "@/components/Icons/DashboardIcon";
import InvectaryIcon from "@/components/Icons/InvectaryIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import ReportsIcon from "@/components/Icons/ReportsIcon";
import SalesIcon from "@/components/Icons/SalesIcon";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import TeamIcon from "@/components/Icons/TeamIcon";

export const options = [
  {
    label: "home.sidebar.menu.dashboard.label",
    Icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "home.sidebar.menu.inventary.label",
    Icon: InvectaryIcon,
    path: "/inventary",
    children: [
      {
        label: "home.sidebar.menu.inventary.children.products",
        path: "/products",
      },
      {
        label: "home.sidebar.menu.inventary.children.categories",
        path: "/categories",
      },
      {
        label: "home.sidebar.menu.inventary.children.invoices",
        path: "/invoices",
      },
    ],
  },
  {
    label: "home.sidebar.menu.sales.label",
    Icon: SalesIcon,
    path: "/sales",
  },
  {
    label: "home.sidebar.menu.team.label",
    Icon: TeamIcon,
    path: "/team",
  },
  {
    label: "home.sidebar.menu.settings.label",
    Icon: SettingsIcon,
    path: "/settings",
  },
  {
    label: "home.sidebar.menu.reports.label",
    Icon: ReportsIcon,
    path: "/reports",
  },
  {
    label: "home.sidebar.menu.profile.label",
    Icon: ProfileIcon,
    path: "/profile",
  },
];
