import React, { useEffect, useRef } from "react";
import style from "@/styles/Home.module.css";

const TextScroll = () => {
  const pTag1Ref = useRef(null);
  const pTag2Ref = useRef(null);
  const pTag3Ref = useRef(null);
  const pTag4Ref = useRef(null);

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;

  useEffect(() => {
    const pTag1 = pTag1Ref.current;
    const pTag2 = pTag2Ref.current;
    const pTag3 = pTag3Ref.current;
    const pTag4 = pTag4Ref.current;

    function marqueeText(count, element, direction) {
      if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
      }
      element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

      return count;
    }

    function animate() {
      count1++;
      count2++;
      count3++;
      count4++;

      count1 = marqueeText(count1, pTag1, -1);
      count2 = marqueeText(count2, pTag2, 1);
      count3 = marqueeText(count3, pTag3, -1);
      count4 = marqueeText(count4, pTag4, 1);

      window.requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div>
      <div className={style.cover}>
        <p className={style.p} ref={pTag1Ref}>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
          <span>dffdf</span>
        </p>
      </div>
      <div className={style.cover}>
        <p className={style.p} ref={pTag2Ref}>
          Chicken Hamburger Pizza Salad Sushi Bibimbab Gimbab JJajangmyeon
        </p>
      </div>
      <div className={style.cover}>
        <p className={style.p} ref={pTag3Ref}>
          Let's Dive Into This Tutorial Take It Easy! Don't Worry
        </p>
      </div>
      <div className={style.cover}>
        <p className={style.p} ref={pTag4Ref}>
          Pure Moral Conscientious Meritorious Worthy Exemplary Upright
        </p>
      </div>
    </div>
  );
};

export default TextScroll;
