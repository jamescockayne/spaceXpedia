import React, { Component } from "react";
import "./App.css";
import Countdown from "../Countdown/Countdown";
import LaunchInformation from "../LaunchInformation/LaunchInformation";
import NavBar from "../NavBar/NavBar";
import LookupViewer from "../LookupViewer/LookupViewer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: "missions",
      database: [],
      isInfoView: false,
      resourceRequested: "",
      filteredDatabase: [],
    };
  }

  componentDidMount() {
    this.buildDatabase();
  }

  buildDatabase = async () => {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v4/launches/past"
      );
      const data = await response.json();
      const allRecords = data.map((e, i) => ({
        id: i,
        name: e.name,
        details: e.details ?? "None Available :(",
        date: e.date_unix,
        patchUrl: e.links.patch.small,
        videoUrl: `https://www.youtube.com/embed/${e.links.youtube_id}`,
      }));

      this.setState({ database: allRecords, filteredDatabase: allRecords });
    } catch (error) {
      console.log(error);
    }
  };

  onMissionSearchClick = (event) => {
    this.setState({ viewMode: "missions", isInfoView: false });
  };

  onCoresSearchClick = (event) => {
    this.setState({ viewMode: "cores", isInfoView: false });
  };

  onPayloadsSearchClick = (event) => {
    this.setState({ viewMode: "payloads", isInfoView: false });
  };

  onUpcomingSearchClick = (event) => {
    this.setState({ viewMode: "upcoming", isInfoView: false });
  };

  resourceClick = (id) => {
    this.setState({ resourceRequested: id, isInfoView: true });
  };

  goBack = () => {
    this.setState({ isInfoView: false });
  };

  searchFunction = (event) => {
    switch (this.state.viewMode) {
      case "missions":
        const searchTerm = event.target.value.trim().toLowerCase();
        const filteredDatabase = this.state.database.filter((record) =>
          record.name.toLowerCase().includes(searchTerm)
        );
        this.setState({ filteredDatabase });
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="App scroll-parent">
        <Countdown />
        <LaunchInformation />
        <LookupViewer
          allData={this.state}
          back={this.goBack}
          resourceClick={this.resourceClick}
        />
        <NavBar
          onMissionSearchClick={this.onMissionSearchClick}
          onCoresSearchClick={this.onCoresSearchClick}
          onPayloadsSearchClick={this.onPayloadsSearchClick}
          onUpcomingSearchClick={this.onUpcomingSearchClick}
          currentView={this.state.viewMode}
          search={this.searchFunction}
        />
      </div>
    );
  }
}

export default App;
