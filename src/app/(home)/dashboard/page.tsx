"use client";
import CustomAreaChart from "@/components/Dashboard/CustomAreaChart/CustomAreaChart";
import DashboardTable from "@/components/Dashboard/DashboardTable/DashboardTable";
import DashboardTeam from "@/components/Dashboard/DashboardTeam/DashboardTeam";
import BoxIcon from "@/components/Icons/BoxIcon";
import BrowserIcon from "@/components/Icons/BrowserIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-7 gap-10">
      <div className="col-span-7">
        <div className="flex gap-8 mb-6">
          <BrowserIcon className="w-6 h-6 text-primary-text-color stroke-current mt-1" />
          <div className="grid gap-2">
            <h2 className="text-2xl font-semibold">
              {t("home.pages.dashboard.sales.title")}
            </h2>
            <p className="text-sm text-secondary-text-color">
              {t("home.pages.dashboard.sales.subtitle")}
            </p>
          </div>
        </div>
        <div className="transition-colors bg-primary-bg-color p-6 rounded-md">
          <CustomAreaChart />
        </div>
      </div>
      <div className="col-span-7 2xl:col-span-5">
        <div className="flex justify-between items-start">
          <div className="flex gap-8">
            <BoxIcon className="w-6 h-6 text-primary-text-color stroke-current mt-1" />
            <div className="grid gap-2">
              <h2 className="text-2xl font-semibold">
                {t("home.pages.dashboard.lastItemsAdded.title")}
              </h2>
              <p className="text-sm text-secondary-text-color">
                {t("home.pages.dashboard.lastItemsAdded.subtitle")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-secondary-text-color font-medium text-sm py-2 px-4"
          >
            {t("home.pages.dashboard.lastItemsAdded.seeAll")}
          </Button>
        </div>
        <div className="pl-7">
          <DashboardTable />
        </div>
      </div>

      <div className="col-span-7 2xl:col-span-2">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-6 items-start">
            <ProfileIcon className="w-6 h-6 text-primary-text-color stroke-current mt-1" />
            <div className="grid gap-2">
              <h2 className="text-2xl font-semibold">
                {t("home.pages.dashboard.team.title")}
              </h2>
              <p className="text-sm text-secondary-text-color">
                {t("home.pages.dashboard.team.subtitle")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-secondary-text-color font-medium text-sm py-2 px-4"
          >
            {t("home.pages.dashboard.team.seeAll")}
          </Button>
        </div>
        <DashboardTeam />
      </div>
    </div>
  );
};

export default DashboardPage;
