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
    <footer className="hidden lg:block h-[38rem] bg-gradient-to-bl from-[#F7730E] via-[#f47f26] to-[#FDB127] footer-mask-cover">
      <main className="h-full pl-[3.75rem] space-y-[2.25rem] flex gap-[12.5rem]">
        <section className="pt-[6rem] space-y-9">
          <img src="/apubcc-horizontal.png" alt="APUBCC Horizontal Logo" className="w-[19.689125rem] h-24 bg-black rounded-3xl" />
          <p className="text-[1.3125rem] font-semibold text-white w-[19rem]">Say something, talk about BCC. briefly intro on BCC</p>
          <div className="flex gap-3">
            {
              Icons.map((icon, index) => (
                <a 
                  key={index} 
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 border-2 border-[#F5710C] rounded-full flex justify-center items-center"
                >
                  {icon.icon}
                </a>
              ))
            }
          </div>
        </section>

        <section className="pt-52 w-[18.375rem] h-[12.5]">
          <h3 className="text-[1.5rem] font-bold">General</h3>
          <div className="flex flex-col flex-wrap text-[#FBD954] text-[1.125rem] font-bold gap-3 h-[160px]">
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
        </section>
        <section className="pt-52 w-[18.375rem] h-[12.5]">
          <h3 className="text-[1.5rem] font-bold">Resources</h3>
          <div className="flex flex-col flex-wrap text-[#FBD954] text-[1.125rem] font-bold gap-3">
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
        </section>
      </main>
    </footer>
  )
}

function MobileFooter() {
  return (
    <footer className="relative">
      <section className="">
        <Image src={"/footer-mobile-mask.svg"} alt={"footer mobile mask"} width={390} height={297} />
      </section>

      <main className="absolute top-0 left-0 flex flex-col gap-[0.9375rem] w-full px-[1rem] pt-[0.5rem]">
        <section>
          <img src="/apubcc-horizontal.png" alt="APUBCC Horizontal Logo" className="bg-black rounded-[0.3125rem] w-[95px] h-[32px]" width={119} height={42}/> 
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