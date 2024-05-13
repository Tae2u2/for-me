import React from "react";
import style from "@/styles/Book.module.css";

export default function Books() {
  const [flipped, setFlipped] = React.useState(false);

  const flipBook = () => {
    setFlipped(!flipped);
  };
  return (
    <div>
      {" "}
      <div className={style.book_container} onClick={flipBook}>
        <div
          className={`${flipped ? `${style.book} ${style.back}` : style.front}`}
        >
          <h1>{flipped ? "Back Cover" : "Front Cover"}</h1>
        </div>
      </div>
    </div>
  );
}
