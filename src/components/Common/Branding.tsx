import React from "react";
import '../../utilities/commonStyles/commonStyles.scss';

interface propTypes {
  styles?: string;
}

export const Branding = React.memo(({ styles }: propTypes) => {

  return (
    <h2 className={`heroTitle ${styles}`} >
      SanjAI
    </h2>
  );
});
