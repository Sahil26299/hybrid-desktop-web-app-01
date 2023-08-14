import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode, memo } from "react";

interface GridComponentPropTypes {
  leftComponent?: () => ReactNode;
  rightComponent?: () => ReactNode;
  containerStyle?: React.ComponentProps<typeof Grid>;
  item1Props?: React.ComponentProps<typeof Grid>;
  item2Props?: React.ComponentProps<typeof Grid>;
}
export const GridComponent = memo(
  ({
    leftComponent,
    rightComponent,
    containerStyle = {},
    item1Props = {},
    item2Props = {},
  }: GridComponentPropTypes) => {
    return (
      <Grid container {...containerStyle}>
        {leftComponent && <Grid {...item1Props}>{leftComponent()}</Grid>}
        {rightComponent && <Grid {...item2Props}>{rightComponent()}</Grid>}
      </Grid>
    );
  }
);
