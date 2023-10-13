import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function QuickLinks() {
  return (
    <span className="flex flex-col gap-5">
      <h3 className={`${roboto_condensed.className} uppercase text-2xl`}>
        Quick Links
      </h3>
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/property-news">Property news</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="/team">Our team</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </nav>
    </span>
  );
}
