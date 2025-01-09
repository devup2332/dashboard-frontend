import EmailIcon from "@/components/Icons/EmailIcon";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import { teamData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const DashboardTeam = () => {
  return (
    <div className="grid gap-6">
      {teamData.map((item) => (
        <div key={item.id} className="flex gap-6 items-center justify-between">
          <div className="flex gap-6 items-center">
            <Image
              src={item.photoUrl}
              alt="User"
              width={50}
              height={50}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <p className="font-medium text-base">{item.name}</p>
              <span className="text-secondary-text-color text-xs">
                {item.role}
              </span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              variant="ghost"
              className="p-5 h-6 w-6 shrink-0 ring-0 outline-none"
            >
              <EmailIcon className="w-6 h-6 stroke-current text-secondary-text-color" />
            </Button>
            <Button
              variant="ghost"
              className="p-5 h-6 w-6 shrink-0 ring-0 outline-none"
            >
              <WhatsappIcon className="w-6 h-6 stroke-current text-secondary-text-color" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardTeam;
