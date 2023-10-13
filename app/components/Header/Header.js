import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";

export default function Header() {
  return (
    <header className="flex flex-col p-3 text-myBlue fill-myBlue justify-between h-[26vh]">
      <HeaderTop />
      <HeaderMiddle />
      <GiHamburgerMenu className="self-end fill-myBlue" size={23} />
      <nav className="hidden"></nav>
    </header>
  );
}
