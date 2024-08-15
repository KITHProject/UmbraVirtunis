import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../../../public/images/image.png"

export default function Header() {
  return (
    <header className="comic-border sticky top-4 z-10 my-4 flex h-16 items-center justify-between gap-4 rounded-xl bg-white bg-opacity-60 px-4 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)] backdrop-blur-xl md:px-6">
      <Link
        href="#"
        className="absolute -left-6 z-10 flex h-12 w-12 items-center justify-center gap-2 rounded-full font-semibold md:text-base"
      >
        <Image
          src={image.src}
          alt={"logo"}
          width={100}
          height={100}
          className="comic-border h-full w-full rounded-full"
        />
      </Link>
      <div></div>
      <nav className="hidden flex-col gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="text-xl font-bold text-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-xl font-bold text-muted-foreground transition-colors hover:text-foreground"
        >
          Marketplace
        </Link>
        <Link
          href="#"
          className="text-xl font-bold text-muted-foreground transition-colors hover:text-foreground"
        >
          Lore
        </Link>
        <Link
          href="#"
          className="text-xl font-bold text-muted-foreground transition-colors hover:text-foreground"
        >
          News
        </Link>
      </nav>
      <Button>PLAY4FREE</Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
  )
}
