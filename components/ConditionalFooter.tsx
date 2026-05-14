"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const NO_FOOTER_PATHS = ["/chat-assistant", "/chat"];

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (NO_FOOTER_PATHS.includes(pathname)) return null;
  return <Footer />;
}
