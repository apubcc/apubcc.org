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
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  )
}


function DesktopFooter() {
  return (
    <footer className="hidden lg:flex h-fit items-end pb-[2.375rem] gap-32 xl:gap-40">
      
      <section className="flex flex-col gap-[2.3125rem]">
        <div className="bg-black rounded-[1.5625rem] w-fit">
          <img src="/apubcc-horizontal.png" alt="APUBCC Horizontal Logo" className="" width={315} height={100}/> 
        </div>

        <p className="text-white text-[1.3125rem] font-semibold w-[20rem]">For collaboration, please contact info@apubcc.org</p>

        <div className="flex gap-3">
          {
            Icons.map((icon, index) => (
              <a 
                key={index} 
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-12 h-12 border-2 border-[#FF2200] rounded-full flex justify-center items-center"
              >
                {icon.icon}
              </a>
            ))
          }
          </div>
      </section>
      
      {/* General */}
      <section className="self-start pt-[1.4375rem]">
         <h3 className="text-[1.5rem] font-bold text-[#FF2200]">General</h3> 
         <div className="flex text-white text-[1.125rem] font-bold gap-10">
          {
            FooterLinks.map((link, index) => (
              <Fragment key={index}>
                <div className="flex flex-col gap-[0.625rem] w-40">
                  {link.general.filter((generalLinks) => generalLinks.title !== "FAQ" && generalLinks.title !== "Contact Us").map((generalLinks, index) => (
                    <Link key={index} href={generalLinks.link}>{generalLinks.title}</Link>
                  ))}
                </div>

                <div className="flex flex-col gap-[0.625rem] w-24">
                  <Link href={link.general.find((generalLinks) => generalLinks.title === "FAQ")?.link || ""}>FAQ</Link>
                  <Link href={link.general.find((generalLinks) => generalLinks.title === "Contact Us")?.link || ""}>Contact Us</Link>
                </div>
              </Fragment>
            ))
          }
         </div>
      </section>

      {/* Resources */}
      <section className="self-start pt-[1.4375rem]">
        <h3 className="text-[1.5rem] font-bold text-[#FF2200]">Resources</h3>
        <div className="flex flex-col text-white text-[1.125rem] font-bold gap-[0.625rem]">
          {
            FooterLinks.map((link, index) => (
              <Fragment key={index}>
                {link.resources.map((resourceLinks, index) => (
                  <Fragment key={index}>
                    <Link href={resourceLinks.link}>{resourceLinks.title}</Link>
                  </Fragment>
                ))}
              </Fragment>
            ))
          }
        </div>
      </section>
      
    </footer>
  )
}

function MobileFooter() {
  return (
    <footer className="relative block lg:hidden">
        <section className="">
          <Image src={"/footer-mobile-mask.svg"} alt={"footer mobile mask"} width={390} height={297} className="w-full h-[20rem]" />
        </section>

        <main className="absolute top-0 left-0 flex flex-col justify-between gap-[0.9375rem] w-full h-full px-[1rem] pt-[0.6rem] pb-[1.125rem]">
          <section>
            <img src="/apubcc-horizontal.png" alt="APUBCC Horizontal Logo" className="bg-black rounded-[0.3125rem] w-[95px] h-[32px] md:w-[119px] md:h-[42px]" width={119} height={42}/> 
          </section>

          <section className="flex justify-between w-full h-[140px] gap-2">
            <div className="w-[5.6875rem]">
              <p className="text-white text-[0.6875rem] font-semibold">For collaboration, please contact info@apubcc.org</p>
            </div>

            {/* General */}
            <div className="space-y-2">
              <h3 className="text-[0.8125rem] font-bold">General</h3>
              <div className="flex flex-col flex-wrap text-[#FBD954] text-[0.8125rem] font-bold h-[160px]">
                {
                  FooterLinks.map((link, index) => (
                    <Fragment key={index}>
                      {link.general.map((generalLinks, index) => (
                        <Fragment key={index}>
                          <Link href={generalLinks.link}>{generalLinks.title}</Link>
                        </Fragment> 
                      ))}
                    </Fragment>
                  ))
                }
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-2">
              <h3 className="text-[0.8125rem] font-bold">Resources</h3>
              <div className="flex flex-col flex-wrap text-[#FBD954] text-[0.8125rem] font-bold gap-3">
                {
                  FooterLinks.map((link, index) => (
                    <Fragment key={index}>
                      {link.resources.map((resourcesLinks, index) => (
                        <Fragment key={index}>
                          <Link href={resourcesLinks.link}>{resourcesLinks.title}</Link>
                        </Fragment> 
                      ))}
                    </Fragment>
                  ))
                }
              </div>
            </div>
          </section>

          <section>
            <div className="flex gap-3">
              {
                Icons.map((icon, index) => (
                  <a 
                    key={index} 
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-6 h-6 border-2 border-[#F5710C] rounded-full flex justify-center items-center"
                  >
                    {icon.icon}
                  </a>
                ))
              }
            </div>
          </section>
        </main>
      </footer>
  )
}