import Image from "next/image";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { listData } from "@/utils/data";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div
        className={`${roboto_condensed.className} w-[100vw] h-[120vh] text-white m-auto slideShowBg grid place-content-center p-6 text-center gap-4 rounded-bl-[-50%] cutCorner`}
      >
        <h1 className="uppercase text-7xl tracking-tight font-light mb-8">
          Lucre Realty
        </h1>
        <span className="flex flex-col gap-2">
          <h3 className="uppercase text-2xl items-center">
            Resilience through acquisition
          </h3>
          <span className="w-[25vw] h-[3px] m-auto bg-white"></span>
        </span>
        <p className="text-2xl font-light">
          Specialised UK property investment company that brings wealth through
          erudite strategies tailored for you.
        </p>

        <p
          role="button"
          className="py-6 px-[25%] uppercase text-xs tracking-[2px] border border-white w-[95%] m-auto font-semibold"
        >
          Request for case study video
        </p>
      </div>

      <div className="h-[70vh] p-6 grid place-content-center text-myBlue text-center gap-8">
        <h2 className="uppercase tracking-wider m-auto max-w-[70%]">
          Comfortable property investment
        </h2>
        <p className="text-[1.36rem]">
          Lucre Realty is an exceptionally fast growing Property Investment
          company providing specialised, safe investment services in the UK.
        </p>
      </div>

      <div className="bg-[#F9F7F5] cutCorner-two py-8">
        <div
          className={`${roboto_condensed.className} text-myBlue grid p-6 gap-4 h-[100vh] place-content-center`}
        >
          <span className="w-[10vw] h-[2px] bg-myBlue"></span>
          <h2 className="uppercase text-[2.6rem] m-auto w-[90%] font-light text-center leading-[3.1rem]">
            Managing your investment as if they were out own
          </h2>
          <span className="w-[6vw] h-[2px] bg-myBlue"></span>
          <p className="uppercase text-2xl font-light w-[70%] tracking-wide">
            We will guide you through the right decision when investing:
          </p>
          <ul className="list-disc px-4 font-light text-base tracking-normal">
            <li className={roboto.className}>
              <p>
                Providing unbiased, independent and detailed advice on where to
                buy, what to buy and why to buy based on your needs
              </p>
            </li>
            <li>
              <p>
                Guiding you through the exit strategy for the desired return
              </p>
            </li>
            <li>
              <p>Earn return on your investments within 6 months </p>
            </li>
            <li>
              <p>
                Organise a portfolio that allows for a steady passive income
              </p>
            </li>
          </ul>
        </div>

        <div className="py-3">
          <img
            src="/images/facade-of-a-modern-apartment-or-office-block-D5F3R9T-768x513.jpg"
            alt="Facadeofa modern apartment or office block"
            className="h-[60vh]"
          />
          <img
            src="/images/new-building-exterior-facade-with-terrace-construc-PM8L7QV-683x1024.jpg"
            alt="New building exterior facade with terrace construction"
          />
        </div>
      </div>

      <div className="p-4 text-center">
        <ul className="flex flex-col justify-center items-center gap-[8vh]">
          {listData.map(({ pic, heading, details }) => (
            <li className="grid gap-4 text-myBlue">
              <img src={pic} alt={heading} className="m-auto" />
              <h3 className={`${roboto_condensed.className} uppercase font tracking-wide`}>{heading}</h3>
              <p className="w-[95%] m-auto">{details}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
