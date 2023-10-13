import Copyright from "./Copyright";
import Disclaimer from "./Disclaimer";
import Location from "./Location";
import LogoSection from "./LogoSection";
import Paragraph from "./Paragraph";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="text-center p-4 flex flex-col text-myBlue gap-[7vh]">
      <LogoSection />
      <Location />
      <QuickLinks />
      <Disclaimer />
      <Paragraph />
      <Copyright />
    </footer>
  );
}
