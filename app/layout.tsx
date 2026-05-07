import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "汪喵泡泡屋 | 宠物洗护店",
  description: "宠物洗护、美容造型、皮毛护理与预约展示页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
