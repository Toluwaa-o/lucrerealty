import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function Location() {
  return (
    <span className="flex flex-col gap-5">
      <h3 className={`${roboto_condensed.className} uppercase text-2xl`}>
        London
      </h3>
      <address className="not-italic">
        71-75 Shelton
        <br /> Street, Covent Garden, London, England,
        <br /> WC2H 9JQ
      </address>
      <Link href="mailto:info@lucrerealty.com">info@lucrerealty.com</Link>
      <Link href="tel:+447883300288">+44 7883 300288</Link>
    </span>
  );
}
