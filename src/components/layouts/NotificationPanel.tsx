import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { PropsWithChildren } from "react"

export  function NotificationPanel({children}:PropsWithChildren) {
  const items = [
    {
      title: "Headline 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Headline 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Notifications</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="space-y-3 px-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="border border-primary rounded-md p-4 bg-white/5 hover:bg-white/3 transition-colors"
              aria-labelledby={`notif-${it.title}`}
            >
              <h3 id={`notif-${it.title}`} className="text-sm font-semibold">
                {it.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-snug">
                {it.description}
              </p>
            </article>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
