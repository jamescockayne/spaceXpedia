import React from "react";
import "../../styles/LaunchInformation.css";
import "../App/App.css";
import { queryById } from "../../helpers/query";

const LaunchInformation = (props) => {
  const [launchInfo, setLaunchInfo] = React.useState({
    patchUrl: "",
    launchInformation: "Loading...",
    flightNumber: "Loading...",
    launchPad: "Loading...",
    name: "Loading...",
    redditLink: "Loading...",
  });

  const getLandingZoneName = React.useCallback((landingString) => {
    switch (landingString) {
      case "JRTI":
        return "Just Read The Instructions";
      case "OCISLY":
        return "Of Course I Still Love You";
      default:
        return "Unknown";
    }
  }, []);

  const init = React.useCallback(async () => {
    try {
      const rawData = await fetch(
        "https://api.spacexdata.com/v5/launches/next"
      );
      const data = await rawData.json();
      const launchPad = (
        await queryById("launchpads", data.launchpad, ["full_name"])
      ).docs[0].full_name;

      setLaunchInfo({
        patchUrl: data.links.patch.large,
        launchInformation:
          data.details ??
          "Unfortunately there's no information for this launch at the moment :(",
        flightNumber: data.flight_number,
        launchPad,
        landingZone: getLandingZoneName(),
        name: data.name,
        redditLink: data.links.reddit.campaign,
      });
    } catch (error) {
      console.log(error);
    }
  }, [getLandingZoneName]);

  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <section id="launch-info" className="scroll-child">
      <div className="launch-info-container">
        <div className="info-display-container">
          <div className="info-top">
            <div>
              {launchInfo.patchUrl ? (
                <img src={launchInfo.patchUrl} alt="Mission Patch" />
              ) : (
                <>No mission patch available :(</>
              )}
            </div>
            <div className="launch-facts">
              <p>
                Mission: {launchInfo.name}
                <br></br>
                <br></br>
                This is launch number {launchInfo.flightNumber} for SpaceX
                <br></br>
                <br></br>
                Launch Site: {launchInfo.launchPad}
                <br></br>
                <br></br>
                Landing Zone: {launchInfo.landingZone}
                <br></br>
                <br></br>
                {launchInfo.redditLink && (
                  <>
                    Be a part of the launch campaign with us on{" "}
                    <a href={launchInfo.redditLink}>Reddit</a>!
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="info-bottom">
            <p className="scrollable">{launchInfo.launchInformation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchInformation;
