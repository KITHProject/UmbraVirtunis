import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col">
      <header className="comic-border sticky top-0 z-10 my-4 flex h-16 items-center justify-between gap-4 rounded-xl bg-white bg-opacity-60 px-4 backdrop-blur-xl md:px-6">
        <Link
          href="#"
          className="absolute -left-6 z-10 flex h-12 w-12 items-center justify-center gap-2 rounded-full font-semibold md:text-base"
        >
          <img
            src="/images/image.png"
            alt="logo"
            className="comic-border h-full w-full rounded-full"
          />
        </Link>
        <div></div>
        <nav className="hidden flex-col gap-6 text-lg font-medium text-white md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Marketplace
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Lore
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            News
          </Link>
        </nav>
        <Button>PLAY4FREE</Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                LOGO
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex min-h-screen flex-col items-center">
        <div className="mb-4 flex flex-col items-center gap-4">
          <h1 className="p-4 text-center text-5xl font-bold text-white">
            Embark on a Mythical Adventure:
          </h1>
          <h2 className="text-4xl font-bold text-white">
            {""} Walk, Explore, Conquer!
          </h2>

          <Button
            className="comic-border h-16 w-48 text-xl"
            variant={"secondary"}
          >
            Play Now
          </Button>
        </div>
        <video
          src="/videos/video (1).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="comic-border w-3/4 rounded-lg"
        />
      </main>
    </div>
  )
}
