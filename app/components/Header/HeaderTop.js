import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1">
        <BsTelephoneFill size={21} />
        <Link href="tel:+447883300288">+44 7883 300288</Link>
      </span>
      <span className="bg-myBlue w-[4px] h-[25px]"></span>
      <span className="flex items-center gap-1">
        <FaEnvelope size={21} />
        <Link href="mailto:info@lucrerealty.com">info@lucrerealty.com</Link>
      </span>
    </div>
  );
}
