import GridImage from "@/components/clonePage/GridImage";
import style from "@/components/clonePage/GridImage.module.css";
import OHeader from "@/components/clonePage/OHeader";
import ShowText from "@/components/clonePage/ShowText";

const PlanitPage = () => {
  return (
    <div className={style.container}>
      <OHeader />
      <GridImage />
      <ShowText />
    </div>
  );
};

export default PlanitPage;
