import OHeader from "@/components/clonePage/OHeader";
import style from "@/components/clonePage/ClonePage.module.css";
import { ReactNode } from "react";

const CloneLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OHeader />
      <main className={style.container}>{children}</main>
    </>
  );
};

export default CloneLayout;
