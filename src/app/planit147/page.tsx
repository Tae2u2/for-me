import GridImage from "@/components/clonePage/GridImage";
import style from "@/components/clonePage/ClonePage.module.css";
import HoverBanner from "@/components/clonePage/HoverBanner";
import OHeader from "@/components/clonePage/OHeader";
import ShowText from "@/components/clonePage/ShowText";
import TitleDesign from "@/components/clonePage/TitleDesign";
import SlideImage from "@/components/clonePage/SlideImage";

const PlanitPage = () => {
  return (
    <div className={style.container}>
      <OHeader />
      <GridImage />
      <TitleDesign />
      <ShowText />
      <HoverBanner />
      <SlideImage />
    </div>
  );
};

export default PlanitPage;
