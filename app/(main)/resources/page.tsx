import TabletLgResources from "./tablet-lg-resources";
import MobileResources from "./mobile-resources";
import { redirect } from "next/navigation";

export default function ResourcesPage() {
  return (
    <>
      <TabletLgResources />
      <MobileResources />
    </>
  );
}
