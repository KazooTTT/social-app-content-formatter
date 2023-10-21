"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const platformToSvgPath = {
  bilibili: `bilibili.svg`,
  weibo: `weibo.svg`,
  twitter: "twitter.svg",
  xiaohongshu: "xiaohongshu.svg",
};

type Platform = "bilibili" | "weibo";

function PlatformItem({
  active,
  platform,
  onClick,
}: {
  active?: boolean;
  platform: Platform;
  onClick: (platform: Platform) => void;
}) {
  return (
    <Button
      variant={"bordered"}
      isIconOnly
      onClick={() => onClick(platform)}
      color={active ? "primary" : "default"}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <Image
          src={platformToSvgPath[platform as Platform]}
          alt="Vercel Logo"
          className="dark:invert w-full h-full"
          width={64}
          height={64}
        />
      </div>
    </Button>
  );
}

export default function App() {
  const [activePlatform, setActivePlatform] = useState<Platform>("bilibili");
  const platformList = ["bilibili", "weibo", "twitter", "xiaohongshu"];
  return (
    <div>
      <label className="block text-small font-medium text-foreground pb-1.5 will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none">
        输出内容
      </label>
      <div className="flex gap-4 items-center">
        {platformList.map((platform) => (
          <PlatformItem
            platform={platform as Platform}
            key={platform}
            active={activePlatform === platform}
            onClick={(platform) => {
              setActivePlatform(platform);
            }}
          />
        ))}
      </div>
    </div>
  );
}
