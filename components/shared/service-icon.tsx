import {
  Globe,
  Server,
  Database,
  Layers,
  Workflow,
  Smartphone,
  Bot,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/services";

const ICONS: Record<Service["icon"], LucideIcon> = {
  globe: Globe,
  server: Server,
  database: Database,
  layers: Layers,
  workflow: Workflow,
  smartphone: Smartphone,
  bot: Bot,
  search: Search,
};

export function ServiceIcon({
  icon,
  className = "h-[17px] w-[17px] text-cream",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} strokeWidth={1.6} />;
}
