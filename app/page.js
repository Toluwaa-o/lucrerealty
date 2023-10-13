import Image from "next/image";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { listData, listDataII } from "@/utils/data";
import { AiOutlineArrowRight } from "react-icons/ai";

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

      <div className="min-h-[70vh] p-6 grid place-content-center text-myBlue text-center gap-8">
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
          className={`${roboto_condensed.className} text-myBlue grid p-6 gap-4 min-h-[100vh] place-content-center`}
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
              <h3
                className={`${roboto_condensed.className} uppercase font tracking-wide`}
              >
                {heading}
              </h3>
              <p className="w-[95%] m-auto">{details}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-myBlue grid p-2 gap-4 min-h-screen place-content-center">
        <span className="bg-myBlue w-[12vw] h-[1px] ml-2"></span>
        <h3
          className={`${roboto_condensed.className} text-center text-[2.3rem] uppercase pt-4 pb-6 tracking-wider`}
        >
          Who are we
        </h3>
        <span className="bg-myBlue w-[33vw] h-[3px] ml-2 mb-[3vh]"></span>
        <img
          src="/images/architectural-building-design-8X4V44H-768x512.jpg"
          alt="architectural building design"
        />

        <p className="mt-[8vh]">
          As a specialised property investment company, our clients are at heart
          with every service and deal we provide. Our team is resourceful in the
          due diligence, competence and objectivity.
          <br />
          <br />
          Regardless of your background, be it an experienced investor or new to
          the property market, we have suitable deals that will help your
          portfolio with the boost that you sought to gain.
        </p>
      </div>

      <div
        className={`${roboto.className} text-myBlue grid p-2 gap-4 min-h-screen place-content-center text-center`}
      >
        <span className="bg-myBlue h-[2px] w-[10vw] ml-[2em]"></span>
        <h3
          className={`${roboto_condensed.className} text-center text-[2.3rem] uppercase w-[90%] m-auto tracking-wider mb-[1em]`}
        >
          Services we offer
        </h3>
        <ul className="flex flex-col justify-center items-center gap-[8vh]">
          {listDataII.map(({ pic, heading, details }) => (
            <li className="grid gap-4 text-myBlue">
              <img src={pic} alt={heading} className="m-auto" />
              <h3
                className={`${roboto_condensed.className} uppercase font-extrabold tracking-wide`}
              >
                {heading}
              </h3>
              <p className="w-[95%] m-auto">{details}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-h-[35vh] items-center overflow-scroll grid grid-flow-col auto-cols-[28%] gap-[30vw] p-4">
        <img src="/images/ico.png" alt="Information Commissioner's Office" />
        <img src="/images/prs.png" alt="Property Redress Scheme" />
        <img src="/images/hmr.png" alt="HM Revenue and Customs" />
      </div>

      <div className="min-h-[80vh] p-2 flex">
        <span className="formBackground w-full text-white grid place-content-center p-6 gap-4">
          <h3 className={`${roboto_condensed.className} text-center text-3xl uppercase`}>Access off market opportunities now</h3>
          <p className={`${roboto.className} font-light tracking-wide`}>
            Subscribe to our Newsletter to be part of our network and benefit
            from monthly updates on the property market and new deals.
          </p>
          <form className="grid gap-3">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            aria-label="Full Name"
            className="p-3 font-serif placeholder:font-extralight"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="p-3 font-serif placeholder:font-extralight"
          />
          <input
            name="mobileNumber"
            type="number"
            placeholder="Mobile Number"
            className="p-3 font-serif placeholder:font-extralight"
          />
          <button className="flex gap-2 border items-center justify-center p-4">
            <p className={`${roboto.className} text-[0.7rem] font-medium uppercase tracking-[3px]`}>Subscribe</p>
            <AiOutlineArrowRight />
          </button>
          </form>
        </span>
      </div>
    </>
  );
}
