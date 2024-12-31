import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { lastItems } from "@/utils/data";
import moment from "moment";
import { cn } from "@/lib/utils";
import EyeIcon from "@/components/Icons/EyeIcon";
import { useTranslation } from "react-i18next";

const DashboardTable = () => {
  const { t } = useTranslation();
  return (
    <Table
      aria-label="Example static collection table"
      classNames={{
        wrapper:
          "bg-secondary-bg-color elevation-0 border-none shadow-none font-raleway transition-colors",
        th: "bg-seconadry-bg-color text-primary-text-color text-sm  font-bold",
        tr: "text-sm",
        td: "py-[20px]",
      }}
    >
      <TableHeader className="bg-primary-bg-color ">
        <TableColumn>
          {t("home.pages.dashboard.lastItemsAdded.table.columns.name")}
        </TableColumn>
        <TableColumn>
          {t("home.pages.dashboard.lastItemsAdded.table.columns.price")}
        </TableColumn>
        <TableColumn>
          {t("home.pages.dashboard.lastItemsAdded.table.columns.status")}
        </TableColumn>
        <TableColumn>
          {t("home.pages.dashboard.lastItemsAdded.table.columns.createdAt")}
        </TableColumn>
        <TableColumn>
          {t("home.pages.dashboard.lastItemsAdded.table.columns.category")}
        </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody>
        {lastItems.map((item, index) => (
          <TableRow
            key={index}
            className={cn(
              "py-4",
              index === lastItems.length - 1
                ? "border-none"
                : "border-b-input-stroke-color border-b-1",
            )}
          >
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.price} {item.currency}
            </TableCell>
            <TableCell>
              <div className="rounded-full bg-success-bg-color w-fit px-3 py-1 text-success-text-color font-medium">
                {item.status}
              </div>
            </TableCell>
            <TableCell>{moment(item.created_at).fromNow()}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>
              <button className="cursor-pointer px-2">
                <EyeIcon className="text-secondary-text-color stroke-current w-6 h-6" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
