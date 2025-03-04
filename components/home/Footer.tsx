import Image from "next/image";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "next-view-transitions";
import { Fragment } from "react";

const Icons = [
  {
    icon: <FaLinkedin className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://linkedin.com/company/apubcc",
  },
  {
    icon: <AiFillTikTok className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://tiktok.com/@apubcc",
  },
  {
    icon: <FaFacebook className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://facebook.com/apubcc",
  },
  {
    icon: <AiFillInstagram className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://instagram.com/apubcc",
  },
  {
    icon: <FaYoutube className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://youtube.com/@apubcc",
  },
  {
    icon: <FaXTwitter className="h-4 w-4 desktop:h-8 desktop:w-8" />,
    link: "https://twitter.com/apubcc",
  },
];

const FooterLinks = [
  {
    general: [
      {
        title: "Vision & Mission",
        link: "/vision-mission",
      },
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Partners",
        link: "/partners",
      },
      {
        title: "Our Team",
        link: "/our-team",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],

    resources: [
      {
        title: "Substack",
        link: "https://apubcc.substack.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/apubcc",
      },
      {
        title: "Onboard",
        link: "",
      },
      {
        title: "Job Board",
        link: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-6 py-8 tablet-lg:flex-row tablet-lg:px-12 desktop:h-[50vh] desktop:items-end desktop:gap-32 desktop:px-0 desktop:pb-[2.375rem] desktop-md:gap-40">
      <section className="flex flex-col gap-6 tablet-lg:gap-[2.3125rem]">
        <div className="w-fit rounded-[1.25rem] bg-black desktop:rounded-[1.5625rem]">
          <img
            src="/apubcc-horizontal.png"
            alt="APUBCC Horizontal Logo"
            className="h-auto w-48 tablet-lg:w-64 desktop:w-[315px]"
          />
        </div>

        <p className="text-base font-semibold text-white tablet-lg:text-lg desktop:w-[20rem] desktop:text-[1.3125rem]">
          For collaboration, please contact info@apubcc.org
        </p>

        <div className="flex gap-2 tablet-lg:gap-3">
          {Icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FF2200] tablet-lg:h-10 tablet-lg:w-10 desktop:h-12 desktop:w-12"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8 tablet-lg:flex tablet-lg:grid-cols-3 tablet-lg:gap-10 tablet-lg:self-end desktop:pt-[1.4375rem] desktop-md:gap-40">
        {/* General */}
        <section className="flex flex-col gap-3">
          <h3 className="mb-3 text-lg font-bold text-[#FF2200] tablet-lg:text-xl desktop:mb-0 desktop:text-[1.5rem]">
            General
          </h3>
          <div className="flex flex-col gap-2 text-sm font-bold text-white tablet-lg:flex-row tablet-lg:gap-3 tablet-lg:text-base desktop:text-[1.125rem]">
            {FooterLinks.map((link, index) => (
              <Fragment key={index}>
                <div className="flex flex-col gap-2 desktop:w-40 desktop:gap-[0.625rem]">
                  {link.general
                    .filter(
                      (generalLinks) =>
                        generalLinks.title !== "FAQ" &&
                        generalLinks.title !== "Contact Us",
                    )
                    .map((generalLinks, index) => (
                      <Link key={index} href={generalLinks.link}>
                        {generalLinks.title}
                      </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-2 desktop:w-24 desktop:gap-[0.625rem]">
                  <Link
                    href={
                      link.general.find(
                        (generalLinks) => generalLinks.title === "FAQ",
                      )?.link || ""
                    }
                  >
                    FAQ
                  </Link>
                  <Link
                    href={
                      link.general.find(
                        (generalLinks) => generalLinks.title === "Contact Us",
                      )?.link || ""
                    }
                  >
                    Contact Us
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="flex flex-col gap-3">
          <h3 className="mb-3 text-lg font-bold text-[#FF2200] tablet-lg:text-xl desktop:mb-0 desktop:text-[1.5rem]">
            Resources
          </h3>
          <div className="flex flex-col gap-2 text-sm font-bold text-white tablet-lg:text-base desktop:gap-[0.625rem] desktop:text-[1.125rem]">
            {FooterLinks.map((link, index) => (
              <Fragment key={index}>
                {link.resources.map((resourceLinks, index) => (
                  <Link key={index} href={resourceLinks.link}>
                    {resourceLinks.title}
                  </Link>
                ))}
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
