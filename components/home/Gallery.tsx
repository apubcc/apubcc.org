"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@react-spring/web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Gallery() {
  return (
    <div
      id="gallery-section"
      className={cn(
        "grid-auto-rows grid grid-cols-2 gap-3 desktop:grid-cols-4",
      )}
    >
      <div className="col-span-1 row-span-2 aspect-[3/5] desktop:row-span-2 desktop:aspect-auto">
        <img
          src="/1.png"
          alt="Gallery 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="aspect-square">
        <img
          src="/2.png"
          alt="Gallery 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hidden aspect-square desktop:col-span-2 desktop:block desktop:aspect-auto">
        <img
          src="/3.png"
          alt="Gallery 3"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-2 hidden aspect-[2/1] desktop:col-span-2 desktop:block desktop:aspect-auto">
        <img
          src="/4.png"
          alt="Gallery 4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-start-2 row-span-2 aspect-[3/5] desktop:col-start-auto desktop:row-span-2 desktop:aspect-auto">
        <img
          src="/5.png"
          alt="Gallery 5"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-2 hidden aspect-[2/1] desktop:col-span-2 desktop:block desktop:aspect-auto">
        <img
          src="/6.png"
          alt="Gallery 6"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="aspect-square desktop:aspect-auto">
        <img
          src="/7.png"
          alt="Gallery 7"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
