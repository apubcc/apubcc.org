"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@react-spring/web"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Gallery() {

  useGSAP(() => {
    const controlGalleryFromEventsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#events-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    controlGalleryFromEventsTimeline.to("#gallery-section", {
      scale: 0.8,
      y: "-1rem",
      duration: 3,
      ease: "power2.inOut",
    });

    const galleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    galleryTimeline.to("#gallery-section", {
      scale: 0.88,
      duration: 2,
      ease: "power2.inOut",
    });
    
  });


  return (
    <div id="gallery-section" className={cn("grid grid-cols-2 grid-auto-rows lg:grid-cols-4 gap-3")}>
      <div className="col-span-1 row-span-2 aspect-[3/5] lg:aspect-auto lg:row-span-2">
        <img src="/1.png" alt="Gallery 1" className="object-cover h-full w-full" />
      </div>
      <div className="aspect-square">
        <img src="/2.png" alt="Gallery 2" className="object-cover h-full w-full" />
      </div>
      <div className="hidden lg:block aspect-square lg:col-span-2 lg:aspect-auto">
        <img src="/3.png" alt="Gallery 3" className="object-cover h-full w-full" />
      </div>
      <div className="col-span-2 hidden lg:block aspect-[2/1] lg:aspect-auto lg:col-span-2">
        <img src="/4.png" alt="Gallery 4" className="object-cover h-full w-full" />
      </div>

      <div className="col-start-2 row-span-2 aspect-[3/5] lg:col-start-auto lg:aspect-auto lg:row-span-2">
        <img src="/5.png" alt="Gallery 5" className="object-cover h-full w-full" />
      </div>
      <div className="col-span-2 hidden lg:block aspect-[2/1] lg:aspect-auto lg:col-span-2">
        <img src="/6.png" alt="Gallery 6" className="object-cover h-full w-full" />
      </div>
      <div className="aspect-square lg:aspect-auto">
        <img src="/7.png" alt="Gallery 7" className="object-cover h-full w-full" />
      </div>
    </div>
  )
}