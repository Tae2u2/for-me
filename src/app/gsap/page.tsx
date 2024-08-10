import ScrollAni from "@/components/gsap/ScrollAni";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import "../global.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

const ScrollPage = () => {
  return (
    <div>
      <ScrollAni />
    </div>
  );
};

export default ScrollPage;
