import React from "react";
import { constants } from "../../utilities/constants/constants";
import { Images } from "../../assets/images";
import { ParallaxBanner } from "react-scroll-parallax";
import { GridComponent } from "../../components/Common/GridComponent/GridComponent";
import { CardComponent } from "../../components/Common/cardComponent/CardComponent";
import { content } from "../../utilities/constants/content";

export const AboutUs = () => {
  return (
    <div id={`${constants.ABOUTUS_PAGE_NAV_ID}`} className="aboutUsWrapper">
      <ParallaxBanner
        layers={[{ image: Images.grid3LandingPage, speed: -20, easing:'easeInOut' }]}
        className="parallaxBannerClass"
      >
        <GridComponent
          containerStyle={{ marginY: 10, }}
          item1Props={{ lg: 6, md: 6, display:'flex', flexDirection:'column', alignItems:'center'}}
          item2Props={{ lg: 6, md: 6, display:'flex', flexDirection:'column', alignItems:'center'}}
          leftComponent={() => {
            return (
              <CardComponent
                cardImg={Images.card1Image}
                cardBody={content.ABOUTUS_SCREEN_CARD_BODY}
                cardTitle={content.ABOUTUS_SCREEN_CARD_TITLE}
                cardPrompt={content.ABOUTUS_SCREEN_CARD_PROMPT}
              />
            );
          }}
          rightComponent={() => {
            return (
              <CardComponent
                cardImg={Images.card1Image}
                cardBody={content.ABOUTUS_SCREEN_CARD_BODY}
                cardTitle={content.ABOUTUS_SCREEN_CARD_TITLE}
                cardPrompt={content.ABOUTUS_SCREEN_CARD_PROMPT}
              />
            );
          }}
        />
      </ParallaxBanner>
    </div>
  );
};
