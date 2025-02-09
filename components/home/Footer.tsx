import Image from "next/image";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from 'next-view-transitions'
import { Fragment } from "react";

const Icons = [
  { icon: <FaLinkedin className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://linkedin.com/company/apubcc" },
  { icon: <AiFillTikTok className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://tiktok.com/@apubcc" },
  { icon: <FaFacebook className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://facebook.com/apubcc" },
  { icon: <AiFillInstagram className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://instagram.com/apubcc" },
  { icon: <FaYoutube className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://youtube.com/@apubcc" },
  { icon: <FaXTwitter className="lg:w-8 lg:h-8 w-4 h-4"/>, link: "https://twitter.com/apubcc" }
];

const FooterLinks = [{
  general: [
    {
      title: "Vision & Mission",
      link: "/vision-mission"
    },
    {
      title: "About Us",
      link: "/about-us"
    },
    {
      title: "Partners",
      link: "/partners"
    },
    {
      title: "Our Team",
      link: "/our-team"
    },
    {
      title: "FAQ",
      link: "/faq"
    },
    {
      title: "Contact Us",
      link: "/contact-us"
    }
  ],

  resources: [
    {
      title: "Substack",
      link: "https://apubcc.substack.com/"
    },
    {
      title: "GitHub",
      link: "https://github.com/apubcc"
    },
    {
      title: "Onboard",
      link: ""
    },
    {
      title: "Job Board",
      link: ""
    }
  ]
}]

export default function Footer() {
  return (
    <footer className="flex flex-col px-6 md:px-12 lg:px-0 py-8 lg:pb-[2.375rem] gap-8 lg:flex-row lg:items-end lg:gap-32 xl:gap-40">
      <section className="flex flex-col gap-6 lg:gap-[2.3125rem]">
        <div className="bg-black rounded-[1.25rem] lg:rounded-[1.5625rem] w-fit">
          <img 
            src="/apubcc-horizontal.png" 
            alt="APUBCC Horizontal Logo" 
            className="w-48 md:w-64 lg:w-[315px] h-auto"
          /> 
        </div>

        <p className="text-white text-base md:text-lg lg:text-[1.3125rem] font-semibold lg:w-[20rem]">
          For collaboration, please contact info@apubcc.org
        </p>

        <div className="flex gap-2 md:gap-3">
          {Icons.map((icon, index) => (
            <a 
              key={index} 
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-[#FF2200] rounded-full flex justify-center items-center"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:flex lg:gap-32 xl:gap-40 lg:self-start lg:pt-[1.4375rem]">
        {/* General */}
        <section>
          <h3 className="text-lg md:text-xl lg:text-[1.5rem] font-bold text-[#FF2200] mb-3 lg:mb-0">General</h3> 
          <div className="flex flex-col lg:flex-row text-white text-sm md:text-base lg:text-[1.125rem] font-bold gap-2 lg:gap-10">
            {FooterLinks.map((link, index) => (
              <Fragment key={index}>
                <div className="flex flex-col gap-2 lg:gap-[0.625rem] lg:w-40">
                  {link.general
                    .filter((generalLinks) => generalLinks.title !== "FAQ" && generalLinks.title !== "Contact Us")
                    .map((generalLinks, index) => (
                      <Link key={index} href={generalLinks.link}>{generalLinks.title}</Link>
                    ))
                  }
                </div>

                <div className="flex flex-col gap-2 lg:gap-[0.625rem] lg:w-24">
                  <Link href={link.general.find((generalLinks) => generalLinks.title === "FAQ")?.link || ""}>FAQ</Link>
                  <Link href={link.general.find((generalLinks) => generalLinks.title === "Contact Us")?.link || ""}>Contact Us</Link>
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h3 className="text-lg md:text-xl lg:text-[1.5rem] font-bold text-[#FF2200] mb-3 lg:mb-0">Resources</h3>
          <div className="flex flex-col text-white text-sm md:text-base lg:text-[1.125rem] font-bold gap-2 lg:gap-[0.625rem]">
            {FooterLinks.map((link, index) => (
              <Fragment key={index}>
                {link.resources.map((resourceLinks, index) => (
                  <Link key={index} href={resourceLinks.link}>{resourceLinks.title}</Link>
                ))}
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}