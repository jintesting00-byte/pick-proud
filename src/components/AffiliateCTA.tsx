import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AffiliateCTAProps {
  platform: string;
  url: string;
  className?: string;
}

const platformStyles: Record<string, string> = {
  Amazon: "bg-amazon text-amazon-foreground hover:opacity-90",
  Flipkart: "bg-flipkart text-flipkart-foreground hover:opacity-90",
};

const AffiliateCTA = ({ platform, url, className }: AffiliateCTAProps) => {
  const style = platformStyles[platform] ?? "bg-primary text-primary-foreground hover:opacity-90";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm font-semibold transition-all duration-200",
        style,
        className
      )}
    >
      Check Price on {platform}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
};

export default AffiliateCTA;
