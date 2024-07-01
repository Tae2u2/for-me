"use client";

import { useScroll } from "@/hooks/useScrollState";
import style from "./AboutPage.module.css";
import { useIntersection } from "@/hooks/useIntersection";
import { useEffect, useRef } from "react";

const CircleObject = () => {
  const { x, y } = useScroll();
  const bgRef = useRef(null);
  const { isVisible } = useIntersection(bgRef, 0.4);

  return (
    <div
      ref={bgRef}
      className={
        isVisible
          ? `${style.circle_object_container} ${style.wide}`
          : style.circle_object_container
      }
    >
      <h4>화장품 사업, 시작하기 막막할 때.</h4>
      <p>뷰티 비즈니스가 쉬워지는 방법</p>
      <ul>
        <li>
          <span></span>
          브랜드와 상품을 기획하기엔 <br />
          우리 팀의 리소스가 부족해
        </li>
        <li>
          <span></span>
          화장품을 잘 파는 건 자신 있지만
          <br /> 잘 만드는건 자신 없어
        </li>
        <li>
          <span></span>
          일단 시장에 인기 있을 것 같은
          <br />
          상품을 출시해보고
          <br /> 사업을 확장해 나가고 싶어
        </li>
      </ul>
      <div className={style.circle}>
        <span>CASE 01</span>
        <span>CASE 02</span>
        <span>CASE 03</span>
        <div className={style.inner_circle}></div>
      </div>
    </div>
  );
};

export default CircleObject;
