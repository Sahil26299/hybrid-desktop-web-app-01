import { Images } from "../../assets/images";
import React from "react";

export const BackgroundVideoComponent = () => {
  return (
    <div >
      <video id="background-video" loop autoPlay muted poster={Images.technologyBackgroundImagePlaceholder} >
        <source src={Images.landingScreenBGVideo} type="video/mp4" />
        <source src={Images.landingScreenBGVideo} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
