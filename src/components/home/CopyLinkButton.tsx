import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyLinkButton({
  copyText,
  className,
}: {
  copyText: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Fallback
      const el = document.createElement("textarea");
      el.value = copyText;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // ignore
      }
      document.body.removeChild(el);
    }
  }

  return (
    <Button
      onClick={handleCopy}
      className={
        "bg-primary-gradient h-8 px-3 w-32 rounded " + (className || "")
      }
    >
      {copied ? "Copied!" : "Copy link"}
    </Button>
  );
}
