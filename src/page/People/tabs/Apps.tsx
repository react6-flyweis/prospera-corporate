import { Button } from "@/components/ui/button";

export default function Apps() {
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-3">Connect to apps for your team</h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
        Give your team access to the apps they need, without leaving Prospera.
        You can create and remove accounts at any time for both new and existing
        team members.
      </p>

      <div className="flex items-center gap-6 mb-6">
        <div className="w-20 h-20 flex items-center justify-center ">
          {/* Simple Google-like mark (colors only for illustration) */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9.1h11.9c-.5 2.6-2 4.8-4.2 6.3v5.2h6.8c4-3.7 6.4-9 6.4-15.9z"
              fill="#4285F4"
            />
            <path
              d="M24 44.5c5.9 0 10.8-1.9 14.4-5.2l-6.8-5.2c-1.9 1.3-4.3 2.1-7.6 2.1-5.8 0-10.7-3.9-12.5-9.1H4.6v5.8C8.2 39.8 15.6 44.5 24 44.5z"
              fill="#34A853"
            />
            <path
              d="M11.5 27.1c-.5-1.3-.8-2.7-.8-4.1s.3-2.8.8-4.1V13h-6.9C3 16.5 2 20.1 2 24s1 7.5 2.6 11l6.9-7.9z"
              fill="#FBBC05"
            />
            <path
              d="M24 9.5c3.1 0 5.9 1.1 8.1 3.2l6.1-6.1C35.2 3 30.3 1 24 1 15.6 1 8.2 5.8 4.6 13l6.9 5.8C13.3 13.4 18.2 9.5 24 9.5z"
              fill="#EA4335"
            />
          </svg>
        </div>

        <div className="w-20 h-20 flex items-center justify-center ">
          {/* Simple Microsoft-like mark */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="9" height="9" fill="#F25022" />
            <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
            <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
            <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
          </svg>
        </div>
      </div>

      <Button className="w-32 bg-primary-gradient">More</Button>
    </div>
  );
}
