"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { useRef } from "react";
import style from "./ClonePage.module.css";

const ShowText = () => {
  const targetRef = useRef(null);
  const { isVisible } = useIntersection(targetRef, 0.4);
  return (
    <div className={style.text_wrapper}>
      <div
        ref={targetRef}
        className={
          isVisible ? `${style.text_box} ${style.show}` : style.text_box
        }
      >
        <p>화장품 사업, 시작하기 막막할 때</p>
        <h1>
          PLANIT 147과 함께하면 <br />
          뷰티 비즈니스가 쉬워집니다
        </h1>
      </div>
    </div>
  );
};

export default ShowText;
