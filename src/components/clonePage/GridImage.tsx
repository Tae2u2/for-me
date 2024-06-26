import Image from "next/image";
import style from "./GridImage.module.css";

const GridImage = () => {
  const productLength = [1, 2, 0, 3, 0, 4, 5, 6, 0, 7, 0, 8];
  const smallImgIndex1 = 6;
  const smallImgIndex2 = 8;

  return (
    <div className={style.grid_wrapper}>
      {productLength.map((number) =>
        number ? (
          <Image
            key={number}
            className={style.products}
            src={`/product_${number}.jpg`}
            alt=""
            width={
              number === smallImgIndex1 || number === smallImgIndex2 ? 130 : 250
            }
            height={
              number === smallImgIndex1 || number === smallImgIndex2 ? 130 : 250
            }
          />
        ) : (
          <div className={style.products} key={number}></div>
        )
      )}
    </div>
  );
};

export default GridImage;
