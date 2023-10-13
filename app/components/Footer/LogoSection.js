import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function LogoSection() {
  return (
    <span className="p-4 max-w-[90%] m-auto grid gap-4">
      <img
        src="/images/Lucre-Realty-logo-finala-768x244.png"
        alt="Lucre Realty Logo"
        className="mb-4"
      />
      <p
        className={`${roboto_condensed.className} uppercase text-sm tracking-wider`}
      >
        Resilience through acquisition
      </p>
      <span className="flex justify-around w-[70%] m-auto items-center">
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsInstagram />
        <BsLinkedin />
      </span>
    </span>
  );
}
