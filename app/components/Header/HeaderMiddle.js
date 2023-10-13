import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export default function HeaderMiddle() {
  return (
    <div className="flex justify-end gap-4">
      <p className="capitalize">Follow us:</p>
      <BiLogoLinkedin size={23} />
      <FaInstagram size={23} />
      <BiLogoFacebook size={23} />
    </div>
  );
}
