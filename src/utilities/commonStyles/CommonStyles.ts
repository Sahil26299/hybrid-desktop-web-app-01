// CommonStyles.js

import { colors } from "../themes/Colors";

export const CommonStyles = {
  commonButtonPrimary: {
    paddingTop:5,
    paddBottom:5,
    width: '15%',
    backgroundColor: colors.BTNPRIMARY,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  commonButtonSecondary: {
    paddingTop:5,
    paddBottom:5,
    width: '15%',
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const combineStyles = (style1:React.CSSProperties={}, style2: React.CSSProperties={}, ...otherStyles:object[]) => {
  return Object.assign(style1, style2, ...otherStyles)
};
