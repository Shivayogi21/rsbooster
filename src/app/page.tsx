// import Footer from "../Components/Footer/Footer";
// import Header from "../Components/Header/Header";
// import CardContainer from "../Components/Homepage/Card";
import CardList from "../Components/Homepage/Card1";
// import { CardHoverEffectDemo } from "../Components/Homepage/CardHoverEffectDemo";
// import { GlobeDemo } from "../Components/Homepage/GlobeDemo";
import Newsletter from "../Components/Homepage/Newsletter";

import OurMission from "../Components/Homepage/OurMission";
import { AnimatedTooltipPreview } from "../Components/Homepage/OurTeam";
import HeroSection from "../Components/Homepage/StarBackgroun";
import { InfiniteMovingCardsDemo } from "../Components/Homepage/Why To Choese";


export default function Home() {
  return (
  <> 
   <HeroSection></HeroSection>
    <AnimatedTooltipPreview></AnimatedTooltipPreview>
    <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    <OurMission></OurMission>
    <Newsletter></Newsletter>
    {/* <CardContainer></CardContainer> */}
    {/* <CardHoverEffectDemo></CardHoverEffectDemo> */}
    <CardList></CardList>
    </>
  );
}
