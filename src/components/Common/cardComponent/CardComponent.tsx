import React from "react";
import { UserTypingComponent } from "../../userTypingComponent/UserTypingComponent";
import './CardComponent.styles.scss';

interface cardComponentPropTypes {
  cardImg?: string;
  cardTitle?: string;
  cardBody?: string;
  cardPrompt:string[]
}
export const CardComponent = ({
  cardImg,
  cardTitle,
  cardBody,
  cardPrompt
}: cardComponentPropTypes) => {
  return (
    <div className="cardComponentWrapper">
      <div
        style={{ backgroundImage: `url(${cardImg})` }}
        className="cardImageClass"
      >
        <UserTypingComponent customClass="typeWriterClassCard" prompts={cardPrompt} size="small" />
      </div>
      <div className="cardContentClass basicPaddingHorizontal advPaddingVertical" >
        <h4 className="cardTitleClass secondary-heading-text">{cardTitle}</h4>
        <span className="cardBodyClass normal-text" >{cardBody}</span>
      </div>
    </div>
  );
};
