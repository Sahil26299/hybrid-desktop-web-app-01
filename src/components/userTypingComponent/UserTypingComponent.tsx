import React, { memo } from "react";
import TypewriterComponent from "typewriter-effect";
import { Images } from "../../assets/images";
import "./userTypingComponent.styles.scss";
import { SendRounded } from "@mui/icons-material";

interface compProptypes {
  profileImage?: string;
  prompts: string[];
  size: "small" | "medium" | "large";
  customClass?: string;
}
const sizeClassMapProfile = {
  small: "dummyProfileContainerSmall",
  medium: "dummyProfileContainerMedium",
  large: "dummyProfileContainerLarge",
};
const sizeClassMapPrompt = {
  small: "promptInputSmall",
  medium: "promptInputMedium",
  large: "promptInputLarge",
};
export const UserTypingComponent = memo(
  ({
    profileImage = Images.dummyProfileImage,
    prompts,
    size,
    customClass,
  }: compProptypes) => {
    console.log("user typing is calling");
    return (
      <div className={`${customClass} dis-flex col-left-centered`}>
        <div
          className={`${sizeClassMapProfile[size]} dis-flex col-centered basicMarginVertical`}
        >
          <img src={profileImage} className={"dummyProfile"} alt="" />
        </div>
        <div
          className={`${sizeClassMapPrompt[size]} dis-flex row-left-centered basicPaddingHorizontal`}
        >
          <TypewriterComponent
            options={{
              strings: prompts,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              wrapperClassName: "typewriterWrapperClass",
            }}
          />
          <div className="sendBtnWrapper basicMarginHorizontal basicPaddingHorizontal dis-flex col-centered">
            <SendRounded className="sendButton" />
          </div>
        </div>
      </div>
    );
  }
);
