import style from "./ClonePage.module.css";

const HoverBanner = () => {
  return (
    <ul className={style.banner_list}>
      <li style={{ backgroundImage: "url(/hover_item1.jpg)" }}>
        <span></span>
        <h1>Easy</h1>
        <h4>쉽고</h4>
        <p>
          고객의 쉽고 빠른 뷰티 비즈니스를 위하여
          <br />
          브랜딩부터 기획, 생산까지
          <br /> 전 영역에 걸쳐 서비스를 제공합니다.
        </p>
      </li>
      <li style={{ backgroundImage: "url(/hover_item2.jpg)" }}>
        <span></span>

        <h1>Proven</h1>
        <h4>검증된</h4>
        <p>
          브랜드의 기획자와 연구원 출신의 전문가가 기획하고
          <br /> 실제 시장에 테스트하며 기획력을 검증합니다.
        </p>
      </li>
      <li style={{ backgroundImage: "url(/hover_item3.jpg)" }}>
        <span></span>
        <h1>Reliable</h1>
        <h4>믿을 수 있는</h4>
        <p>
          머신러닝을 기반으로 개발한
          <br />
          상품 모형 평가 및 예측 알고리즘을 토대로
          <br />
          고객에게 제안합니다.
        </p>
      </li>
    </ul>
  );
};

export default HoverBanner;
