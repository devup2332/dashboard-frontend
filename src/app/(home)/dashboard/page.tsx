"use client";
import CustomAreaChart from "@/components/Home/CustomAreaChart/CustomAreaChart";
import DashboardTable from "@/components/Home/DashboardTable/DashboardTable";
import BoxIcon from "@/components/Icons/BoxIcon";
import BrowserIcon from "@/components/Icons/BrowserIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-3">
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
        <div className="bg-primary-bg-color p-6 rounded-md transition-colors">
          <CustomAreaChart />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-8">
            <BoxIcon className="w-6 h-6 text-primary-text-color stroke-current" />
            <div className="grid gap-2">
              <h2 className="text-2xl font-semibold">
                {t("home.pages.dashboard.lastItemsAdded.title")}
              </h2>
              <p className="text-sm text-secondary-text-color">
                {t("home.pages.dashboard.lastItemsAdded.subtitle")}
              </p>
            </div>
          </div>
          <button className="text-secondary-text-color font-medium text-sm py-2 px-4">
            {t("home.pages.dashboard.lastItemsAdded.seeAll")}
          </button>
        </div>
        <div className="pl-7">
          <DashboardTable />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default DashboardPage;
