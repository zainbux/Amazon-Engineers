import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, MountainIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background  bg-black">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src={'/AMAZON_ENGINEERS.jpg'} alt='logo' width={94} height={94} />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

          <Link href="/workwithus" className="text-muted-foreground hover:text-white" prefetch={false}>
            Start Now
          </Link>
          <Link href="/whatweoffer" className="text-muted-foreground hover:text-white" prefetch={false}>
            Our Services
          </Link>
          <Link href="/referralprogram" className="text-muted-foreground hover:text-white" prefetch={false}>
            Referral Program
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-black text-white">
            <div className="flex items-center justify-between h-16 px-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image src={'/AMAZON_ENGINEERS.jpg'} alt='logo' width={94} height={94} />
              </Link>
              {/* <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <XIcon className="w-6 h-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose> */}
            </div>
            <nav className="grid gap-4 py-6 px-4">

              <Link href="/workwithus" className="flex items-center gap-2 text-sm font-medium" prefetch={false}>
              Start Now
              </Link>
              <Link href="/whatweoffer" className="flex items-center gap-2 text-sm font-medium" prefetch={false}>
                Our Services
              </Link>
              <Link href="/referralprogram" className="flex items-center gap-2 text-sm font-medium" prefetch={false}>
                Referral Program
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
