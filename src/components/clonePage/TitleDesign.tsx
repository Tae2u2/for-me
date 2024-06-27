import style from "./ClonePage.module.css";

const TitleDesign = () => {
  return (
    <div className={style.home_title_wrapper}>
      <h1 className={style.home_title}>PLANIT</h1>
      <div className={style.home_kor_title}>
        Beauty Brand
        <br />
        Incubator
        <br />
        당신의 뷰티 비즈니스가 쉬워지는 곳
      </div>
      <h1 className={style.home_title}>147</h1>
    </div>
  );
};

export default TitleDesign;
