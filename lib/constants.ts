export const TIER_OPTIONS = [
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
    { value: "ultra", label: "Ultra" },
  ] as const;
  
  export type Tier = (typeof TIER_OPTIONS)[number]["value"];

// Tier styling constants for UI components
export const TIER_STYLES: Record<
  Tier,
  {
    gradient: string;
    border: string;
    text: string;
    badge: string;
  }
> = {
  free: {
    gradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    badge: "bg-emerald-500/90 text-white",
  },
  pro: {
    gradient: "from-violet-500 to-fuchsia-600",
    border: "border-violet-500/30",
    text: "text-violet-400",
    badge: "bg-violet-500/90 text-white",
  },
  ultra: {
    gradient: "from-cyan-400 to-blue-600",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    badge: "bg-cyan-500/90 text-white",
  },
};