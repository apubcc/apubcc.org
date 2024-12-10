import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from 'next-view-transitions'
import { Fragment } from "react";

const Icons = [
  <FaLinkedin className="w-8 h-8"/>,
  <AiFillTikTok className="w-8 h-8"/>,
  <FaFacebook className="w-8 h-8"/>,
  <AiFillInstagram className="w-8 h-8"/>,
  <FaYoutube className="w-8 h-8"/>,
  <FaXTwitter className="w-8 h-8"/>
]

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
      <footer className="h-[38rem] bg-gradient-to-bl from-[#F7730E] via-[#f47f26] to-[#FDB127] footer-mask-cover">

        <main className="h-full pl-[3.75rem] space-y-[2.25rem] flex gap-[12.5rem]">
          <section className="pt-[6rem] space-y-9">
            <img src="/apubcc-horizontal.png" alt="APUBCC Horizontal Logo" className="w-[19.689125rem] h-24 bg-black rounded-3xl" />
            <p className="text-[1.3125rem] font-semibold text-white w-[19rem]">Say something, talk about BCC. briefly intro on BCC</p>
            <div className="flex gap-3">
              {
                Icons.map((icon, index) => (
                  <div key={index} className="w-12 h-12 border-2 border-[#F5710C] rounded-full flex justify-center items-center">
                    {icon}
                  </div>
                ))
              }
            </div>
          </section>

          <section className="pt-52 w-[18.375rem] h-[12.5]">
            <h3 className="text-[1.5rem] font-bold">General</h3>
            <div className="flex flex-col flex-wrap text-[#FBD954] text-[1.125rem] font-bold gap-3 h-1/2">
              {
                FooterLinks.map((link) => (
                  link.general.map((generalLinks, index) => (
                    <Fragment key={index}>
                      <Link href={generalLinks.link}>{generalLinks.title}</Link>
                    </Fragment> 
                  ))
                ))
              }
            </div>
          </section>
          <section className="pt-52 w-[18.375rem] h-[12.5]">
            <h3 className="text-[1.5rem] font-bold">Resources</h3>
            <div className="flex flex-col flex-wrap text-[#FBD954] text-[1.125rem] font-bold gap-3 h-1/2">
              {
                FooterLinks.map((link) => (
                  link.resources.map((resourcesLinks, index) => (
                    <Fragment key={index}>
                      <Link href={resourcesLinks.link}>{resourcesLinks.title}</Link>
                    </Fragment> 
                  ))
                ))
              }
            </div>
          </section>
        </main>
      </footer>
    </>
  )
}