import TabletLgResources from "./tablet-lg-resources";
import MobileResources from "./mobile-resources";
import { redirect } from "next/navigation";

const resources = [
  {
    id: 1,
    title: "Substack",
    img: "/Card1Main.png",
    icon: "/Substackicon.svg",
    link: "https://apubcc.substack.com/",
    info: "Substack is where we share insights and updates.",
  },
  {
    id: 2,
    title: "Github",
    img: "/GithubImage.svg",
    icon: "/GithubIcon.svg",
    link: "https://github.com/APUBCC",
    info: "Explore our open-source projects on GitHub.",
  },
  {
    id: 3,
    title: "Onboard",
    img: "/OnboardImage.svg",
    icon: "/OnboardIcon.svg",
    link: "https://onboard.stackup.dev/community/apubcc",
    info: "Join our community on Onboard.",
  },
  {
    id: 4,
    title: "Notion",
    img: "/NotionIcon.svg",
    icon: "/NotionIcon.svg",
    link: "https://apubcc-job-board.notion.site/APUBCC-s-Job-Board-9f2613885ed745228073eaf1c28726a1",
    info: "Check out job opportunities on our Notion page.",
  },
];

export default function ResourcesPage() {
  if (process.env.NODE_ENV === "production") {
    redirect("/not-found");
  }

  return (
    <>
      <TabletLgResources />
      <MobileResources />
    </>
  );
}
