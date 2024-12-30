"use client";
import CustomAreaChart from "@/components/Home/CustomAreaChart/CustomAreaChart";
import BrowserIcon from "@/components/Icons/BrowserIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex gap-8 mb-6">
        <BrowserIcon className="w-6 h-6 text-primary-text-color stroke-current mt-1" />
        <div>
          <h2 className="text-2xl font-semibold">
            {t("home.pages.dashboard.sales.title")}
          </h2>
          <p className="text-sm text-secondary-text-color">
            {t("home.pages.dashboard.sales.subtitle")}
          </p>
        </div>
      </div>
      <div className="bg-primary-bg-color p-6 rounded-md">
        <CustomAreaChart />
      </div>
    </div>
  );
};

export default DashboardPage;
