"use client";

import { useEffect, useRef } from "react";
import style from "./ClonePage.module.css";

const SlideImage = () => {
  const slideItemArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const pTag1Ref = useRef<HTMLDivElement | null>(null);
  const pTag2Ref = useRef<HTMLDivElement | null>(null);

  let count1 = 0;
  let count2 = 0;

  useEffect(() => {
    const pTag1 = pTag1Ref.current;
    const pTag2 = pTag2Ref.current;

    function marqueeText(
      count: number,
      element: HTMLDivElement | null,
      direction: number
    ) {
      if (element) {
        if (count > element.scrollWidth / 2) {
          element.style.transform = `translate3d(0, 0, 0)`;
          count = 0;
        }
        element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

        return count;
      }
      return 0;
    }

    function animate() {
      count1++;
      count2++;

      count1 = marqueeText(count1, pTag1, -1);
      count2 = marqueeText(count2, pTag2, 1);

      window.requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className={style.slide_container}>
      <div className={style.slide_wrapper} ref={pTag1Ref}>
        {slideItemArr.map((item) => (
          <div key={item} className={style.slide_item}>
            {item}
          </div>
        ))}
        {slideItemArr.map((item) => (
          <div key={item} className={style.slide_item}>
            {item}
          </div>
        ))}
      </div>
      <div className={style.slide_wrapper_reverse} ref={pTag2Ref}>
        {slideItemArr.map((item) => (
          <div key={item} className={style.slide_item}>
            {item}
          </div>
        ))}
        {slideItemArr.map((item) => (
          <div key={item} className={style.slide_item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideImage;
