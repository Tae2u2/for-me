import Link from "next/link";
import style from "./ClonePage.module.css";

const OHeader = () => {
  return (
    <nav className={style.header}>
      <h4>PLANT147</h4>
      <ul>
        <li>
          <Link href={"/planit147/about"}>ABOUT</Link>
        </li>
        <li>
          <Link href={"/planit147"}>WORKS</Link>
        </li>
        <li>
          <Link href={"/planit147"}>LINEUP 147</Link>
        </li>
        <li>
          <Link href={"/planit147"}>FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default OHeader;
