import { Box, Button, Container } from "@mui/material";
import "./LandingPage.styles.scss";
import { Branding } from "../../components/Common/Branding";
// import { AnimatedButton } from "../../components/Common/animatedButton/AnimatedButton";
import { UserTypingComponent } from "../../components/userTypingComponent/UserTypingComponent";
import { GridComponent } from "../../components/Common/GridComponent/GridComponent";
import { Images } from "../../assets/images";
import { content } from "../../utilities/constants/content";
import { colors } from "../../utilities/themes/Colors";
import { constants } from "../../utilities/constants/constants";

export default function LandingPage() {
  return (
    <div id={constants.LANDING_PAGE_NAV_ID} >
      <Container className="landingWrapper moderatePaddingVertical dis-flex col-centered">
        <div className="dis-flex col-centered">
          <span className="basicPaddingHorizontal normal-text">
            Introducing
          </span>
        </div>
        <Branding styles={"grand-heading-text"} />
        <span className="subTitle">
          {" "}
          <span className="specialFont">Divyadrishti</span> Beyond Your Eyes.
        </span>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"50%"}
          sx={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <Button
            className="landingScreen-primary-Btn mui-common-btn"
            variant="contained"
          >
            Watch Video
          </Button>
          <Button
            className="landingScreen-secondary-Btn mui-common-btn"
            variant="contained"
          >
            Join Beta
          </Button>
          {/* <AnimatedButton title="Watch Video" /> */}
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <UserTypingComponent
            prompts={content.LANDING_PAGE_PROMPT_EG}
            size={"medium"}
          />
        </Box>
      </Container>
      <div className="moderateMarginVertical" >
        <GridComponent
          item1Props={{ lg: 4 }}
          item2Props={{ lg: 6, paddingRight: 10 }}
          containerStyle={{
            rowSpacing: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          leftComponent={() => {
            return (
              <div
                className="oddGridLeftSection"
                style={{
                  backgroundImage: `url(${Images.revenueBackgroundImage})`,
                }}
              >
                <UserTypingComponent
                  customClass={"userTypingGridClass1"}
                  prompts={content.LANDING_PAGE_GRID_1_PROMPT}
                  size={"small"}
                />
              </div>
            );
          }}
          rightComponent={() => {
            return (
              <div>
                <h2
                  className="secondary-heading-text"
                  style={{ color: colors.WHITE }}
                >
                  {content.LANDING_PAGE_GRID_1_TITLE}
                </h2>
                <br />
                <span className="normal-text" style={{ color: colors.WHITE }}>
                  {content.LANDING_PAGE_GRID_1_BODY}
                </span>
              </div>
            );
          }}
        />
        <GridComponent
          item1Props={{ lg: 6, paddingLeft: 10 }}
          item2Props={{ lg: 4 }}
          containerStyle={{
            rowSpacing: 10,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
          rightComponent={() => {
            return (
              <div
                className="evenGridRighttSection"
                style={{
                  backgroundImage: `url(${Images.grid2LandingPage})`,
                }}
              >
                <UserTypingComponent
                  customClass={"userTypingGridClass1"}
                  prompts={content.LANDING_PAGE_GRID_2_PROMPT}
                  size={"small"}
                />
              </div>
            );
          }}
          leftComponent={() => {
            return (
              <div>
                <h2
                  className="secondary-heading-text"
                  style={{ color: colors.WHITE }}
                >
                  {content.LANDING_PAGE_GRID_2_TITLE}
                </h2>
                <br />
                <span className="normal-text" style={{ color: colors.WHITE }}>
                  {content.LANDING_PAGE_GRID_2_BODY}
                </span>
              </div>
            );
          }}
        />
        <GridComponent
          item1Props={{ lg: 4 }}
          item2Props={{ lg: 6, paddingRight: 10 }}
          containerStyle={{
            rowSpacing: 10,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:10
          }}
          leftComponent={() => {
            return (
              <div
                className="oddGridLeftSection"
                style={{
                  backgroundImage: `url(${Images.grid3LandingPage})`,
                }}
              >
                <UserTypingComponent
                  customClass={"userTypingGridClass1"}
                  prompts={content.LANDING_PAGE_GRID_3_PROMPT}
                  size={"small"}
                />
              </div>
            );
          }}
          rightComponent={() => {
            return (
              <div>
                <h2
                  className="secondary-heading-text"
                  style={{ color: colors.WHITE }}
                >
                  {content.LANDING_PAGE_GRID_3_TITLE}
                </h2>
                <br />
                <span className="normal-text" style={{ color: colors.WHITE }}>
                  {content.LANDING_PAGE_GRID_3_BODY}
                </span>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
